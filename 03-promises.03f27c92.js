!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON"),a=r("h6c0i"),c={bodyEl:document.querySelector("body"),btnStartSwitchEl:document.querySelector("button[data-start]"),btnStopSwitchEl:document.querySelector("button[data-stop]"),formEl:document.querySelector(".form"),btnStartEl:document.querySelector("button[data-start]"),daysEl:document.querySelector("span[data-days]"),hoursEl:document.querySelector("span[data-hours]"),minutesEl:document.querySelector("span[data-minutes]"),secondsEl:document.querySelector("span[data-seconds]"),inputEl:document.querySelector("#datetime-picker")};function i(e){var t={};return new FormData(e.currentTarget).forEach((function(e,n){t[n]=e})),t}function d(e,t){return new Promise((function(n,o){var r=Math.random()>.3,u={position:e,delay:t};setTimeout((function(){r?n(u):o(u)}),t)}))}c.formEl.addEventListener("submit",(function(t){t.preventDefault();for(var n=i(t),o=Number(n.delay),r=0;r<Number(n.amount);r++){var c=o+Number(n.step*r);d(r,c).then((function(e){var t=e.position,n=e.delay;a.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.03f27c92.js.map
