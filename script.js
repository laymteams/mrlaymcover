const targetDate = new Date("April 1, 2026 12:00:00").getTime();

function updateUI() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
        // ВРЕМЯ ПРИШЛО: Показываем трек, скрываем таймер
        document.getElementById("waiting-screen").classList.add("hidden");
        document.getElementById("release-screen").classList.remove("hidden");
        return;
    }

    // Расчет времени для таймера
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Вывод в HTML
    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("mins").innerText = m.toString().padStart(2, '0');
    document.getElementById("secs").innerText = s.toString().padStart(2, '0');
}

// Запуск проверки каждую секунду
const timerId = setInterval(() => {
    updateUI();
    
    // Если релиз случился, можно остановить интервал
    const now = new Date().getTime();
    if (targetDate - now <= 0) clearInterval(timerId);
}, 1000);

// Вызываем один раз сразу при загрузке
updateUI();
