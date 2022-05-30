const secondEl = document.getElementById('second-hand');
const minuteEl = document.getElementById('min-hand');
const hoursEl = document.getElementById('hour-hand');

function setDate() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = (30 * hours) + 90;
    const minutesDegrees = (minutes * 6) + 90;
    const secondsDegrees = (seconds * 6) + 90;

    hoursEl.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteEl.style.transform = `rotate(${minutesDegrees}deg)`;
    secondEl.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(hours, minutes, seconds);
}

setInterval(setDate, 1000);