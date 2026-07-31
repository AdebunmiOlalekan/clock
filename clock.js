

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock() {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg = (hr % 12) * 30 + min * 0.5;

    second.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hour.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
