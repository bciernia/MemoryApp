const timer = document.querySelector('.timer');

let time = 0;

export const startTimer = () => {
    timer.style.display = 'block';
    const timerId = setInterval(() => {
        time++;
        timer.textContent = time.toString();
    }, 1000);

    return timerId;
}

export const resetTimer = (timerId) => {
    clearInterval(timerId);
    time = 0;
    timer.textContent = time.toString();
    timer.style.display = 'none';
}