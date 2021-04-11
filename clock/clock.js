const morning = 7;
const noon = 12;
const afternoon = 13;
const evening = 18;
const night = 23;

const showCurrentTime = function() {
    const clock = document.getElementById('clock');

    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';

    // set meridian
    if (hours >= noon) {
        meridian = 'PM';
    }
    // 12 hour format
    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;

};

const updateClock = function() {
    let time = new Date().getHours();
    let messageText = 'hi'
    var timeEventJS = document.getElementById("timeEvent");

    if (time >= morning && time < noon) {
        messageText = 'Good Morning!'
    } else if (time >= noon && time < evening) {
        messageText = 'Good afternoon!'
    } else if (time >= evening && time < night) {
        messageText = 'Good evening'
    } else if (time >= night || time <= 3) {
        messageText = 'Go to sleep!!'
    } else if (time > 3 && time < morning) {
        messageText = 'Wow! You are awake early!'
    };

    console.log(messageText); 
    timeEventJS.innerText = messageText;

    showCurrentTime();
};

updateClock();

const oneSecond = 1000;
setInterval(updateClock, oneSecond);
