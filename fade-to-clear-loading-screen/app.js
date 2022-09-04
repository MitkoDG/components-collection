const background = document.querySelector('.bg');
const counter = document.querySelector('.loading-text');
const loadedMsg = document.querySelector('.loaded')

let load = 0;
const interval = setInterval(loading, 30);

function loading() {
    load++;

    if (load > 99) {
        clearInterval(interval);

        loadedMsg.style.display = 'block';
    }

    counter.textContent = `${load}%`
    counter.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// I got the next scale func from https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}