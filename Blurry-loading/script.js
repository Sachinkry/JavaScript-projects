const loadTextEl = document.querySelector('.loading-text');

const blurEl = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 40);
function blurring() {
    load++;

    console.log(load);
    if (load > 99) {
        clearInterval(int);
    }

    loadTextEl.textContent = `${load}%`;

    loadTextEl.style.opacity = scale(load, 0, 100, 1, 0);

    blurEl.style.filter = `blur(${scale(load, 0, 100, 8, 0)}px)`;

}

// mapping a range of number to some other range of number
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


