// Функция обратного отсчета
function startCountdown() {
    // Устанавливаем дату: 1 апреля 2026, 12:00:00
    const releaseDate = new Date("April 1, 2026 12:00:00").getTime();

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = releaseDate - now;

        // Расчет времени
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Вывод в HTML
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');

        // Если время вышло
        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector(".countdown").innerHTML = "<h2 style='color: var(--lime)'>BOOM! ТРЕК ВЫШЕЛ</h2>";
        }
    }, 1000);
}

// Плавный переход по ссылкам
document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: "smooth" });
    }
});

// Запуск
startCountdown();
