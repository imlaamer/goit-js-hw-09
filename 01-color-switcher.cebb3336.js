!function(){var t={bodyEl:document.querySelector("body"),btnStartSwitchEl:document.querySelector("button[data-start]"),btnStopSwitchEl:document.querySelector("button[data-stop]"),formEl:document.querySelector(".form"),btnStartEl:document.querySelector("button[data-start]"),daysEl:document.querySelector("span[data-days]"),hoursEl:document.querySelector("span[data-hours]"),minutesEl:document.querySelector("span[data-minutes]"),secondsEl:document.querySelector("span[data-seconds]"),inputEl:document.querySelector("#datetime-picker")};function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var n=null;t.btnStartSwitchEl.disabled=!1,t.btnStopSwitchEl.disabled=!0,t.btnStartSwitchEl.addEventListener("click",(function(){t.btnStartSwitchEl.disabled=!0,t.btnStopSwitchEl.disabled=!1,t.bodyEl.style.backgroundColor=e(),n=setInterval((function(){t.bodyEl.style.backgroundColor=e()}),1e3)})),t.btnStopSwitchEl.addEventListener("click",(function(){t.btnStartSwitchEl.disabled=!1,t.btnStopSwitchEl.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.cebb3336.js.map