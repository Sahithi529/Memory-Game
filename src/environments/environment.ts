// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
  apiKey: "AIzaSyCp-GiBZmuAu10Yk0wACE9P4uMC9zekOGg",
    authDomain: "myapp-da24b.firebaseapp.com",
    databaseURL: "https://myapp-da24b.firebaseio.com",
    projectId: "myapp-da24b",
    storageBucket: "myapp-da24b.appspot.com",
    messagingSenderId: "1082541659537"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
