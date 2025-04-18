const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const ampm = document.querySelector('#ap');

setInterval(() => {
    const currTime = new Date();

    const hours = currTime.getHours() - 12;

    const h = (hours<10?"0":"") + hours;
    const m = (currTime.getMinutes()<10?"0":"") + currTime.getMinutes();
    const s = (currTime.getSeconds()<10?"0":"") + currTime.getSeconds();
    const ap = currTime.getHours()< 12?"AM":"PM";

    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = ap;
}, 1000);