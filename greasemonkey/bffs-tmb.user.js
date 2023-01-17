// ==UserScript==
// @name         TMB Best Friends
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://thatsmybis.com/8752/best-friends/c/*/*/loot
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thatsmybis.com
// @updateURL    https://gist.github.com/seanmarthur/ddc2d6c6a954e80c724e36870fae4319/raw/bffs-tmb.js
// @downloadURL  https://gist.github.com/seanmarthur/ddc2d6c6a954e80c724e36870fae4319/raw/bffs-tmb.js
// @homepage     https://gist.github.com/seanmarthur/ddc2d6c6a954e80c724e36870fae4319
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select the node that will be observed for mutations
    const wishList = document.getElementById('wishlistItems');

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
            el.innerText = idx;
            item.prepend(el);
        });
    }, 5000);

})();
