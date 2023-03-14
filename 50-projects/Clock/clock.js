const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
console.log("toggle");
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark mode"
    } else {
        html.classList.add('dark');
        e.target.innerHTML = "Light mode"
    }
})

function setTime() {
    const time = new Date();
    const day = time.getDay();
    const date = time.getDate()
    const month = time.getMonth();
    const hours = time.getHours();
    const hoursForClock = time.getHours() % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    hourEl.style.transform = `translate(-50%, -100%) rotate(${5*30}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute*6}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${second*6}deg)`;

    timeEl.innerHTML = `${hours}:${minute<10 ? '0'+minute : minute}` ;
    dateEl.innerHTML = `${days[day]}, ${months[month]}, <span class="circle">${date}</span>` ;
}


setTime()
setInterval(setTime, 1000)
