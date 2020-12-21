// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD1QY66y3XZvP0CSj3eHE2usFbRXCjvWv0",
    authDomain: "ngrx-qu.firebaseapp.com",
    databaseURL: "https://ngrx-qu.firebaseio.com",
    projectId: "ngrx-qu",
    storageBucket: "ngrx-qu.appspot.com",
    messagingSenderId: "183273342773",
    appId: "1:183273342773:web:a4a3d2d450f2bd4c156e7c",
    measurementId: "G-46HRNZYT10",
  },
  reduxMetaLogUserActions: false,
  reduxMetaLogNgrxActions: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
