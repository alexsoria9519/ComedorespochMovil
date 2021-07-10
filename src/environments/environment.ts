// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url: "http://192.168.100.48:8080",
  url: "http://192.168.1.9:8080",
  // urllocal: 'http://192.168.100.48:8080',
  // urllocal: 'http://192.168.100.6:8080',

  // urllocal: 'http://192.168.0.105:8080',
  // rest: '/da.ws-rest/webresources/daws-rest',
  rest: "/ComedorREST/webresources",
  // restlocal: '/ComedorREST/webresources',

  //  //http://localhost:8080/ComedorREST/webresources
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
