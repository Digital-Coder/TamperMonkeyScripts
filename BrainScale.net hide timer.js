// ==UserScript==
// @name         BrainScale.net hide timer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skips timer without premium subscription
// @match        https://brainscale.net/dual-n-back/training
// @match        https://brainscale.net/mental-math/training
// @match        https://brainscale.net/corsi/training
// @match        https://brainscale.net/memory-span/training
// @match        https://brainscale.net/complex-working-memory/training


// @grant        none
// ==/UserScript==

(function() {
    const cancelButton = document.querySelector('.press-inform');
    cancelButton.addEventListener('click',function(){
    gamesCommon.hideStartupDelay()
    })

})();