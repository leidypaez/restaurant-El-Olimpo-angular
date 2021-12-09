// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAhjarBU5bfXzh1hgQZVIKXw2ON0FgEIYk",
    authDomain: "restaurant-el-olimpo.firebaseapp.com",
    projectId: "restaurant-el-olimpo",
    storageBucket: "restaurant-el-olimpo.appspot.com",
    messagingSenderId: "151459880689",
    appId: "1:151459880689:web:db102fe5c0707826ea9350",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
