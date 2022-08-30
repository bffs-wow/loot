// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cache_bust: '10',
  sheetId: '17Rbw1bye___MIknxYE3Yg-G6m1BEBh0L1rLEAgTcBKo',
  apiKey: 'AIzaSyB3IfCPeyxe_qHKZYBfZvNtn2reVWDRVvU',
  logsGuildUrl:
    'https://classic.warcraftlogs.com/guild/rankings/532692/latest/',
  logsCharacterBaseUrl:
    'https://classic.warcraftlogs.com/character/us/faerlina/',
  wclApiKey: '1767459f13aa17a7d1ad89c0c8b6ad6e',
  wishlistLength: 50,
  // Offspec wishlist items may not be placed in this spot or earlier on the list.
  // If there are not this many Main Spec items in the list, the OS items will be "pushed down" to this point.
  wishlistOffspecCutoff: 33,
  maxAttendancePoints: 18.5,
  tmbBaseUrl: 'https://thatsmybis.com/8752/best-friends/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
