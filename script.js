// script.js

function updateClock() {
    // Get current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if hours === 0, show 12

    // Pad single digits with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Build time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update DOM
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.innerText = timeString;
    }
}

// Initialize immediately so there's no 1-second blank
updateClock();

// Update every second
setInterval(updateClock, 1000);
