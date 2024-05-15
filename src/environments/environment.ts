// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cache_bust: '15',
  logsGuildUrl:
    'https://classic.warcraftlogs.com/guild/rankings/532692/latest/',
  logsCharacterBaseUrl:
    'https://classic.warcraftlogs.com/character/us/faerlina/',
  // This should match the wishlist length setting in TMB
  wishlistLength: 50,
  // Offspec wishlist items may not be placed in this spot or earlier on the list.
  // If there are not this many Main Spec items in the list, the OS items will be "pushed down" to this point.
  wishlistOffspecCutoff: 33,
  // Combined with the rolling attendance period, this detemines the "leniency rule" that allows for a number of absent/tardies
  forgiveness: 1,
  // How many slots between weapon items?
  itemsPerSlotRule: 3,
  tmbBaseUrl: 'https://thatsmybis.com/19497/best-friends-test/',
  /**
   * IMPORTANT: The values in this array *MUST* match the values provided in the TMB JSON data, the 'instance_name' properties of items.
   * This is used to generate ranking data for items not on wishlists (i.e. everyone is eligible for all items, even if they don't list - but we don't want to process every item in the game, just current phase.)
   */
  currentRaids: ['Throne of the Four Winds Heroic', 'Blackwing Descent Heroic', 'The Bastion of Twilight Heroic'],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
