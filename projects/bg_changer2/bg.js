start = document.getElementById('startBtn');
stop = document.getElementById('stopBtn');
number = "0123456789ABCDEF";
let interval = null;

change_bg = () => {
    bg_color = "#";
    for (let i = 0; i < 6; i++) {
        const color = Math.floor(Math.random() * 16);
        bg_color += number[color];
    }
    return bg_color;
}

start.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            document.body.style.backgroundColor = change_bg();
        }, 1000);
    }
    // document.body.style.backgroundColor = change_bg();
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});