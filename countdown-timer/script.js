
// Elements
const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minElem = document.getElementById('minutes');
const secElem = document.getElementById('seconds');
const titleElem = document.getElementById('event-title');

var initDate = '01.01.2023';
var initTitle = titleElem.innerText;

console.log(initDate)
console.log(initTitle)

function submit() {

    //TITLE 
    const userTitle = document.getElementById('input-title').value;
    console.log(userTitle)
    titleElem.innerText = (userTitle !== undefined || userTitle !== "") ? initTitle : userTitle;


    // DATE
    const userDate = document.getElementById('input-date').value;
    console.log(userDate)
    initDate = (userDate === undefined || userDate === "") ? initDate : userDate;

    countDown();
}


function countDown() {

    const desiredDate = new Date(initDate);
    const currentDate = new Date();

    const secDiff = (desiredDate - currentDate) / 1000;

    const days = Math.floor(secDiff / 3600 / 24);
    const hours = Math.floor(secDiff / 3600) % 24;
    const minutes = Math.floor(secDiff / 60) % 60;
    const seconds = Math.floor(secDiff) % 60;

    daysElem.innerText = days;
    hoursElem.innerText = formatTime(hours);
    minElem.innerText = formatTime(minutes);
    secElem.innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000)

