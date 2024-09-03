document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2024-11-30T09:00:00").getTime();

    function updateCounter() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
});
