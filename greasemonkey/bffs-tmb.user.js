// ==UserScript==
// @name         TMB Best Friends
// @namespace    https://thatsmybis.com/8752/best-friends
// @version      0.1
// @author       You
// @match        https://thatsmybis.com/8752/best-friends/c/*/*/loot
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thatsmybis.com
// @updateURL    	https://github.com/bffs-wow/loot/raw/master/greasemonkey/bffs-tmb.user.js
// @downloadURL  	https://github.com/bffs-wow/loot/raw/master/greasemonkey/bffs-tmb.user.js
// @homepage     	https://github.com/bffs-wow/loot/raw/master/greasemonkey
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the wishlist element
    const wishList = document.getElementById('wishlistItems');
    if (wishList) {
      // Every 5 seconds (to account for active list editing) - add a simple number to the corner of each item to show the wishlist position
      setInterval(() => {
          const items = Array.from(wishList.getElementsByClassName('input-item'));
          items.forEach((item, idx) => {
              const el = document.createElement('span');
              const elId = 'bffs-wl-' + idx;
              const existing = document.getElementById(elId)
              if(existing) {
                  existing.remove();
              }
              el.setAttribute('id',elId);
              el.innerText = idx+1;
              item.prepend(el);
          });
      }, 5000);
    }
})();
