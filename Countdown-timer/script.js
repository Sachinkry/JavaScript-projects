// ending date 
// current date
// subtract

const newYears = '1 Jan 2023'
const daysEl = document.querySelector('#days');
daysEl.textContent = 7
function countdown() {
    const newYearsDate = new Date(newYears);
    // console.log(newYearsDate);

    const currentDate = new Date();
    // console.log(currentDate);

    // let diff = (newYearsDate - currentDate);
    // let days = diff / 86400000;
    // let hours = days * 24;
    // let minutes = hours * 60;
    // let seconds = minutes * 60;

    // const hoursEl = document.getElementById('#hours');
    // const minutesEl = document.getElementById('#minutes');
    // const secondsEl = document.getElementById('#seconds');

    console.log(daysEl)
    daysEl.inn = 3; //days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

}

// initial call
countdown();
// console.log(countdown());
setInterval(countdown, 1000);