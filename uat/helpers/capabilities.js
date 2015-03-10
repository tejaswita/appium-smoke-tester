/*jslint node: true */

'use strict';

//exports.ios = {
//  browserName: '',
//  'appium-version': '1.1',
//  platformName: 'iOS',
//  platformVersion: '7.1',
//  deviceName: 'iPhone',
//  app: undefined // will be set later
//};

exports.android = {
  browserName: '',
  'appium-version': '1.3.4',
  platformName: 'Android',
  platformVersion: '4.4.2',
  deviceName: 'Nexus_4',
  automationName: 'selendroid',
  deviceType: "phone",
  androidUseRunningApp: false,
  appPackage: 'com.the_experimenters.hybrid_sign_in',
  appActivity: '.BeanThere',
  app: '/projects/appium-spike/appium-smoke-tester/sample-code/apps/android/BeanThere-debug.apk'
};
//
//exports.android18 = {
//  browserName: '',
// 'appium-version': '1.3.4',
//  platformName: 'Android',
//  platformVersion: '4.4.2',
//  deviceName: 'Nexus_4',
//  automationName: 'Appium',
//  deviceType: "phone",
//  androidUseRunningApp: false,
//  app: undefined // will be set later
//};
//
//exports.selendroid16 = {
//  browserName: '',
//  'appium-version': '1.1',
//  platformName: 'Android',
//  platformVersion: '4.1',
//  automationName: 'selendroid',
//  deviceName: 'Android Emulator',
//  app: undefined // will be set later
//};
