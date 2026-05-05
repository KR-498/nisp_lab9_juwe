// Ustaw datę Juwenaliów
const eventDate = new Date("May 24, 2024 18:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "ZACZYNAMY!";
    }
}, 1000);