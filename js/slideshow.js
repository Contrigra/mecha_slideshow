export default class Slideshow {
    constructor() {
        this.imageArray = ["img/1.jpg", "img/2.webp", "img/3.webp", "img/4.jpg", "img/5.webp"];
        this.currentImageIndex = 0
    }

    switchImage(index) {
        this.switchActiveDot(this.currentImageIndex, index);
        this.currentImageIndex = index;
        this.renderPicture(index);
    }

    renderPicture(index) {
        const pictureDiv = document.querySelector('.image-container');
        pictureDiv.style.backgroundImage = `url(${this.imageArray[index]})`
    }

    renderDots() {
        const dotContainer = document.querySelector('.dot-container')
        for (let i = 0; i < this.imageArray.length; i++) {
            const dotDiv = document.createElement('div')
            dotDiv.classList.add(`dot`)
            dotDiv.dataset.index = `${i}`
            dotDiv.addEventListener('click', e => {
                // avoid toggling the same dot
                if (Number(e.target.dataset.index) !== this.currentImageIndex) {
                    this.switchImage(Number(e.target.dataset.index))
                }
            })
            dotContainer.appendChild(dotDiv)
        }
    }

    switchActiveDot(oldIndex, newIndex) {
        const currentDot = document.querySelector(`.dot[data-index="${newIndex}"]`);
        currentDot.classList.toggle('selected');

        if (newIndex === oldIndex) {
            return
        }
        // remove old dot if we switch to a new dot
        const oldDot = document.querySelector(`.dot[data-index="${oldIndex}"]`);
        oldDot.classList.toggle('selected');
    }

    switchLeft() {
        const rightButton = document.querySelector('.right');
        let previousIndex = this.currentImageIndex - 1;
        if (this.currentImageIndex === 0) {
            this.switchImage(this.imageArray.length - 1)
        } else {
            this.switchImage(previousIndex)
        }
    }

    switchRight() {
        const rightButton = document.querySelector('.right');
        let nextIndex = this.currentImageIndex + 1;
        if (nextIndex === this.imageArray.length) {
            this.switchImage(0)
        } else {
            this.switchImage(nextIndex)
        }
    }
}

