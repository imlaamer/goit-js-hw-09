const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStartEl.addEventListener('click', changeColorEverySecond);
function changeColorEverySecond() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStartEl.disabled = true;
  }, 1000);
}

btnStopEl.addEventListener('click', stopChangingColor);
function stopChangingColor() {
  btnStartEl.disabled = false;;
  clearInterval(timerId);
}
