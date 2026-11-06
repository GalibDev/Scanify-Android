# Scanify Android

Standalone Kotlin Android project for Scanify. Open this directory in Android Studio.

## Build

Requires JDK 17+, Android SDK 36, and Android 8.0+ on the phone. Set JAVA_HOME and ANDROID_HOME (or configure sdk.dir in local.properties), then run:

```powershell
./gradlew.bat assembleDebug
```

APK: `app/build/outputs/apk/debug/app-debug.apk`.

The current compiled Scanify interface, PDF runtime, and English/Bengali OCR models are bundled under `app/src/main/assets/web`. No Node.js installation or web server is required to build or run this Android project. The web application source is maintained separately in [Scanify](https://github.com/GalibDev/Scanify).

Kotlin provides camera permission handling, file selection, Save As export, and Android back navigation. Documents remain in local app storage and are removed on uninstall. Browser sharing falls back to export when Web Share is unavailable. Large exports can consume substantial memory. Physical-device camera testing is still required.

This builds a debug-signed APK. Store distribution requires a release build and private signing key.
