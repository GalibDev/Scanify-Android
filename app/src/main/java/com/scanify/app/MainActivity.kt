package com.scanify.app

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.util.Base64
import android.webkit.*
import android.widget.Toast
import androidx.webkit.WebViewAssetLoader
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import java.io.ByteArrayInputStream
import java.io.File

class MainActivity : ComponentActivity() {
 private lateinit var web: WebView
 private var chooser: ValueCallback<Array<Uri>>? = null
 private var camera: PermissionRequest? = null
 private var pending: File? = null
 override fun onCreate(state: Bundle?) {
  super.onCreate(state)
  web = WebView(this)
  WebView.setWebContentsDebuggingEnabled((applicationInfo.flags and android.content.pm.ApplicationInfo.FLAG_DEBUGGABLE) != 0)
  val container = android.widget.FrameLayout(this)
  container.addView(web, android.widget.FrameLayout.LayoutParams(-1, -1))
  setContentView(container)
  onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
   override fun handleOnBackPressed() {
    if (web.canGoBack()) web.goBack()
    else web.evaluateJavascript("window.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape'}))", null)
   }
  })
  container.setOnApplyWindowInsetsListener { view, insets ->
   if (android.os.Build.VERSION.SDK_INT >= 30) {
    val bars = insets.getInsets(android.view.WindowInsets.Type.systemBars())
    view.setPadding(bars.left, bars.top, bars.right, bars.bottom)
   }
   insets
  }
  container.requestApplyInsets()
  web.settings.apply {
   javaScriptEnabled = true; domStorageEnabled = true; allowFileAccess = false
   allowContentAccess = true; mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
  }
  val loader = WebViewAssetLoader.Builder().addPathHandler("/", WebViewAssetLoader.PathHandler { path ->
   val file = path.ifEmpty { "index.html" }
   try {
    val mime = when (file.substringAfterLast('.')) {
     "js" -> "application/javascript"
     "wasm" -> "application/wasm"
     "css" -> "text/css"
     "html" -> "text/html"
     "json", "webmanifest" -> "application/json"
     else -> MimeTypeMap.getSingleton().getMimeTypeFromExtension(file.substringAfterLast('.')) ?: "application/octet-stream"
    }
    WebResourceResponse(mime, if (mime.startsWith("text/") || mime == "application/javascript" || mime == "application/json") "UTF-8" else null, assets.open("web/$file"))
   } catch (_: Exception) { WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", emptyMap(), ByteArrayInputStream(byteArrayOf())) }
  }).build()
  web.webViewClient = object : WebViewClient() {
   override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest) = loader.shouldInterceptRequest(request.url)
   override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
    if (request.url.scheme == "https" && request.url.host == "appassets.androidplatform.net") return false
    if (request.url.scheme in listOf("https", "http", "mailto", "tel")) {
     try { startActivity(Intent(Intent.ACTION_VIEW, request.url)) } catch (_: Exception) { }
    }
    return true
   }
   override fun onPageFinished(view: WebView, url: String) {
    view.evaluateJavascript(assets.open("android-bridge.js").bufferedReader().use { it.readText() }, null)
   }
  }
  web.webChromeClient = object : WebChromeClient() {
   override fun onShowFileChooser(view: WebView, callback: ValueCallback<Array<Uri>>, params: FileChooserParams): Boolean {
    chooser?.onReceiveValue(null); chooser = callback
    try { startActivityForResult(params.createIntent().addCategory(Intent.CATEGORY_OPENABLE), 10) }
    catch (_: Exception) { chooser?.onReceiveValue(null); chooser = null }
    return true
   }
   override fun onPermissionRequest(request: PermissionRequest) {
    runOnUiThread {
     if (request.origin.toString().trimEnd('/') != "https://appassets.androidplatform.net" || !request.resources.contains(PermissionRequest.RESOURCE_VIDEO_CAPTURE)) { request.deny(); return@runOnUiThread }
     if (checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED) request.grant(arrayOf(PermissionRequest.RESOURCE_VIDEO_CAPTURE))
     else { camera?.deny(); camera = request; requestPermissions(arrayOf(Manifest.permission.CAMERA), 20) }
    }
   }
   override fun onPermissionRequestCanceled(request: PermissionRequest) { if (camera == request) camera = null }
  }
  web.addJavascriptInterface(object {
   @JavascriptInterface fun save(data: String, name: String, mime: String) {
    try {
     val temp = File.createTempFile("export-", ".bin", cacheDir).apply { writeBytes(Base64.decode(data.substringAfter(','), Base64.DEFAULT)) }
     runOnUiThread {
      if (pending != null) { temp.delete(); Toast.makeText(this@MainActivity, "Finish saving the previous file first", Toast.LENGTH_LONG).show(); return@runOnUiThread }
      pending = temp
      try { startActivityForResult(Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
       addCategory(Intent.CATEGORY_OPENABLE); type = mime.ifBlank { "application/octet-stream" }; putExtra(Intent.EXTRA_TITLE, File(name).name)
      }, 30) } catch (_: Exception) { pending?.delete(); pending = null }
     }
    } catch (_: Exception) { runOnUiThread { Toast.makeText(this@MainActivity, "Unable to prepare file", Toast.LENGTH_LONG).show() } }
   }
  }, "ScanifyAndroid")
  if (state == null) web.loadUrl("https://appassets.androidplatform.net/") else web.restoreState(state)
 }
 override fun onRequestPermissionsResult(code: Int, permissions: Array<String>, results: IntArray) {
  super.onRequestPermissionsResult(code, permissions, results)
  if (code == 20) {
   if (results.firstOrNull() == PackageManager.PERMISSION_GRANTED) camera?.grant(arrayOf(PermissionRequest.RESOURCE_VIDEO_CAPTURE)) else camera?.deny()
   camera = null
  }
 }
 @Deprecated("Platform activity results")
 override fun onActivityResult(code: Int, result: Int, data: Intent?) {
  super.onActivityResult(code, result, data)
  if (code == 10) { chooser?.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(result, data)); chooser = null }
  if (code == 30) {
   val file = pending; pending = null
   try { if (result == RESULT_OK && data?.data != null && file != null) {
    contentResolver.openOutputStream(data.data!!)?.use { output -> file.inputStream().use { it.copyTo(output) } } ?: error("Cannot open file")
    Toast.makeText(this, "File saved", Toast.LENGTH_SHORT).show()
   } } catch (_: Exception) { Toast.makeText(this, "Could not save file", Toast.LENGTH_LONG).show() }
   finally { file?.delete() }
  }
 }
 override fun onSaveInstanceState(state: Bundle) { web.saveState(state); super.onSaveInstanceState(state) }
 override fun onDestroy() { chooser?.onReceiveValue(null); camera?.deny(); web.destroy(); super.onDestroy() }
}
