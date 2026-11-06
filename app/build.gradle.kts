plugins { id("com.android.application"); id("org.jetbrains.kotlin.android") }
android {
 namespace = "com.scanify.app"
 compileSdk = 36
 defaultConfig { applicationId = "com.scanify.app"; minSdk = 26; targetSdk = 36; versionCode = 1; versionName = "0.1.0" }
 compileOptions { sourceCompatibility = JavaVersion.VERSION_17; targetCompatibility = JavaVersion.VERSION_17 }
 kotlinOptions { jvmTarget = "17" }
 androidResources {
  noCompress += listOf("wasm", "gz")
  // Next.js serves essential scripts and styles from _next.
  ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~"
 }
}
dependencies { implementation("androidx.webkit:webkit:1.14.0"); implementation("androidx.activity:activity:1.11.0") }
