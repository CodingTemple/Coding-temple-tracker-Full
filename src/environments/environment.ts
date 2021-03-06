// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "API_KEY_HERE",
    authDomain: "coding-temple-tracker-jc.firebaseapp.com",
    databaseURL: "https://coding-temple-tracker-jc.firebaseio.com",
    projectId: "coding-temple-tracker-jc",
    storageBucket: "coding-temple-tracker-jc.appspot.com",
    messagingSenderId: "630643053485",
    appId: "1:630643053485:web:9ced4eb76541b55e490724"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
