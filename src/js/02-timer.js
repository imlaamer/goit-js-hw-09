import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { addLeadingZero } from './helpers'; //?
import { convertMs } from './helpers';
import { updateInterface } from './helpers';


let timerId = null;
let deltaTime = 0;
refs.btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedValue = selectedDates[0];
    if (isSelectedValueValid(selectedValue)) {
      refs.btnStartEl.addEventListener('click', () => onClick(selectedValue));
    } else {
      refs.btnStartEl.removeEventListener('click', () =>
        onClick(selectedValue)
      );
    }
  },
};
flatpickr('#datetime-picker', options);

function isSelectedValueValid(selectedValue) {
  if (selectedValue > new Date()) {
    refs.btnStartEl.disabled = false;
    return true;
  } else {
    refs.btnStartEl.disabled = true;
    Notiflix.Notify.failure('Please choose a date in the future');
    return false;
  }
}

function onClick(selectedValue) {
  refs.inputEl.disabled = true; // з дев тулс інпут іноді не блокується(?), на живій сторінці все ок
  refs.btnStartEl.disabled = true;
  let currentTime = new Date();
  updateCurrentInterface(selectedValue, currentTime);
  
  timerId = setInterval(() => {
    currentTime = new Date();
    if (currentTime >= selectedValue) {
      clearInterval(timerId);
      Notify.success('The end');
      return;
    }
     updateCurrentInterface(selectedValue, currentTime);
  }, 1000);
}

function updateCurrentInterface(value, time) {
  deltaTime = value - time;
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  updateInterface({ days, hours, minutes, seconds });
}

//дублювання коду?