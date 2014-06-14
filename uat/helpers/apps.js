/*jslint node: true */

'use strict';

if (process.env.DEV) {
  exports.iosWebviewApp = "sample-code/apps/ios/WebViewApp.app";
  exports.iosPrivate1 = "sample-code/apps/ios/Private1.app";
  exports.androidPrivate1 = "sample-code/apps/android/Private1-debug.apk";

  exports.iosUICatalogApp = "sample-code/apps/ios/UICatalog/build/Release-iphonesimulator/UICatalog.app";
  exports.androidApiDemos = "sample-code/apps/android/ApiDemos/bin/ApiDemos-debug.apk";
} else {
  exports.iosTestApp = "http://appium.github.io/appium/assets/TestApp7.1.app.zip";
  exports.iosWebviewApp = "http://appium.github.io/appium/assets/WebViewApp7.1.app.zip";
  exports.iosUICatalogApp = "http://appium.github.io/appium/assets/UICatalog7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
  exports.selendroidTestApp = "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk";

  exports.iosWebviewAppLocal = "http://localhost:3000/WebViewApp7.1.app.zip";
  exports.androidApiDemosLocal = "http://localhost:3000/ApiDemos-debug.apk";
}