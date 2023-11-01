import { refs } from './refs';
import { getRandomHexColor } from './helpers';

let timerId = null;
refs.btnStartSwitchEl.disabled = false;
refs.btnStopSwitchEl.disabled = true;

function changeColorEverySecond() {
  refs.btnStartSwitchEl.disabled = true;
  refs.btnStopSwitchEl.disabled = false;
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
refs.btnStartSwitchEl.addEventListener('click', changeColorEverySecond);

function stopChangingColor() {
  refs.btnStartSwitchEl.disabled = false;
  refs.btnStopSwitchEl.disabled = true;
  clearInterval(timerId);
}
refs.btnStopSwitchEl.addEventListener('click', stopChangingColor);

//дублювання коду?
