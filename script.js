// Цель: 1 апреля 2026, 12:00 по местному времени
const targetDate = new Date("April 1, 2026 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Если время вышло
    if (distance <= 0) {
        renderRelease();
        return;
    }

    // Расчет времени
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Вывод в HTML
    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("mins").innerText = m.toString().padStart(2, '0');
    document.getElementById("secs").innerText = s.toString().padStart(2, '0');
}

// Функция, которая «взрывает» сайт и добавляет плеер
function renderRelease() {
    const timerScreen = document.getElementById("timer-screen");
    const releaseScreen = document.getElementById("release-screen");

    if (!timerScreen.classList.contains("hidden")) {
        timerScreen.classList.add("hidden");
        
        // Вставляем плеер только сейчас!
        releaseScreen.innerHTML = `
            <div class="player-box">
                <h2 style="color: #32CD32; margin-bottom: 10px;">БЭМС! РЕЛИЗ ТУТ</h2>
                <h1 style="margin-bottom: 20px;">TNT (Dinamit)</h1>
                <audio controls autoplay>
                    <source src="sPervimAprely.mp3" type="audio/mpeg">
                    Твой браузер не тянет этот звук.
                </audio>
                <p style="margin-top: 20px; opacity: 0.6;">MrLaym Single No. 1</p>
            </div>
        `;
        releaseScreen.classList.remove("hidden");
    }
}

// Обновляем каждую секунду
const interval = setInterval(() => {
    const now = new Date().getTime();
    if (targetDate - now <= 0) {
        renderRelease();
        clearInterval(interval);
    } else {
        updateCountdown();
    }
}, 1000);

// Запуск при загрузке
updateCountdown();
