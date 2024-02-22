import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const userDate = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let selectedDate;
button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      button.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        position: "topRight",
    });
    }else {
      button.disabled = false;
      selectedDate = selectedDates[0].getTime();
    };
  },  
};

const datePicker = flatpickr(userDate, options);

button.addEventListener("click", () => {
  button.disabled = true;
  userDate.disabled = true;
  
  let countdownInterval = setInterval (() => {
    let timeDifference = selectedDate - new Date().getTime();
    let time = convertMs(timeDifference);
    let {days, hours, minutes, seconds} = time;

    daysElement.textContent = `${addLeadingZero(days)}`
    hoursElement.textContent = `${addLeadingZero(hours)}`
    minutesElement.textContent = `${addLeadingZero(minutes)}`
    secondsElement.textContent = `${addLeadingZero(seconds)}`

    timeDifference -= 1000;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      userDate.disabled = false;
    }
  }, 1000);
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}