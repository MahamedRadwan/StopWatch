// stop watch
let sw = document.getElementById('time');
console.log(sw);
let hours = 0;
let min = 0;
let sec = 0;
let isTrue = false;


function startWatch() {
    if (isTrue == false) {
        isTrue = true;
        setTime()
    }
}

function stopTimer() {
    if (isTrue == true) {
        isTrue = false;
    }
}

function setTime() {
    sec = parseInt(sec);
    min = parseInt(min);
    hours = parseInt(hours);
    if (isTrue == true) {
        sec += 1;
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hours += 1
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hours < 10 || hours == 0) {
            hours = '0' + hours;
        }
        sw.innerHTML = hours + ':' + min + ':' + sec;
        setTimeout('setTime()',1000)
    }
}


function resetTimer() {
    sw.innerHTML = "00:00:00";
    isTrue = true;
    hours = 0;
    sec = 0;
    min = 0;
}














