/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import Router from './router';
// import NotifService from './screens/notifications/NotifService'
import PushNotification from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';


LogBox.ignoreAllLogs(true)


const App = () => {
  // PushNotification.configure({
  //   // (optional) Called when Token is generated (iOS and Android)
  //   onRegister: function (token) {
  //     console.log("TOKEN:", token);
  //     AsyncStorage.setItem("device_token", JSON.stringify(token))
  //     // AsyncStorage.setItem("device_type", token.os)

  //   },

  //   // (required) Called when a remote is received or opened, or local notification is opened
  //   onNotification: function (notification) {
  //     console.log("onNotifaction:", notification);
  //     // process the notification

  //     // (required) Called when a remote is received or opened, or local notification is opened
  //     // notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },

  //   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  //   onAction: function (notification) {
  //     console.log("ACTION:", notification.action);
  //     console.log("onAction:", notification);

  //     // process the action
  //   },

  //   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  //   onRegistrationError: function (err) {
  //     console.error("onRegistrationError", err.message, err);
  //   },

  //   // IOS ONLY (optional): default: all - Permissions to register.
  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },

  //   // Should the initial notification be popped automatically
  //   // default: true
  //   popInitialNotification: true,

  //   /**
  //    * (optional) default: true
  //    * - Specified if permissions (ios) and token (android and ios) will requested or not,
  //    * - if not, you must call PushNotificationsHandler.requestPermissions() later
  //    * - if you are not using remote notification or do not have Firebase installed, use this:
  //    *     requestPermissions: Platform.OS === 'ios'
  //    */
  //   requestPermissions: true,
  // });

  return (
    <Router />
  );
};

export default App;
