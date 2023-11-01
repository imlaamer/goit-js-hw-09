import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createData } from './helpers';
import { createPromise } from './helpers';
import { refs } from './refs';

refs.formEl.addEventListener('submit', setLoop);

function setLoop(event) {
  event.preventDefault()
  const dataObj = createData(event);
  const delay = Number(dataObj.delay);

  for (let i = 0; i < Number(dataObj.amount); i++) {
    const sum = delay + (Number(dataObj.step * i));
    const newPromise = createPromise(i, sum);
    newPromise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
          });
  }
}
