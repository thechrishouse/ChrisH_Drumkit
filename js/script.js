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

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(step) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + step + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Ensure the first slide is properly shown on page load
document.addEventListener("DOMContentLoaded", () => {
  slides[currentSlide].classList.add('active');
});
