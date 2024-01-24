import Slideshow from './slideshow.js'

const slideshow = new Slideshow()
slideshow.renderDots()
// start with the first image on page load
slideshow.switchImage(0);

const leftButton = document.querySelector('.left');
leftButton.addEventListener('click', (e) => {
    slideshow.switchLeft();
});

const rightButton = document.querySelector('.right');
rightButton.addEventListener('click', (e) => {
    slideshow.switchRight();
});

