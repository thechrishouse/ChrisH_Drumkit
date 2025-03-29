// Event Listener



function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; // Stops function from running
    
    audio.currentTime = 0; //rewinds the audio to the beginning
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return // ignore if it's not "transform"
    console.log(e.propertyName);

    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);