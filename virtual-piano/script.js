const keys = document.querySelectorAll('.piano-key');
const piano = document.querySelectorAll('.piano-key');
const clicker = document.getElementById('piano');

function playSound(event) {
    const audio = document.querySelector(`audio[data-letter="${event.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-letter="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function startSound(event) {
    let key = event.target;
    let note = document.getElementById(key.dataset.letter);
    if (!note) return;

    key.classList.add('playing');
    note.play();

}

const stopSound = (event) => {
    event.target.classList.remove('playing');
}
const startCorrespodOver = (event) => {

    event.target.classList.add('playing');
    keys.forEach((elem) => {
        elem.addEventListener("mouseover", startSound);
        elem.addEventListener("mouseout", stopSound);
    });
}
const stopCorrespodOver = () => {
    keys.forEach((elem) => {
        elem.classList.remove('playing');
        elem.removeEventListener("mouseover", startSound);
        elem.removeEventListener("mouseout", stopSound);
    });
}

clicker.addEventListener("mousedown", startCorrespodOver, false);
clicker.addEventListener("mouseup", stopCorrespodOver)




piano.forEach(key => key.addEventListener('mousedown', startSound));

function removeTransform(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


keys.forEach(key => key.addEventListener('transitionend', removeTransform));


window.addEventListener('keydown', playSound);
window.addEventListener('mousedown', startSound);



document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

function toggleScreen() {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }

}