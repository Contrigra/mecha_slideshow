class Slideshow {
    constructor() {
    this.imageArray = [];
    }

    changePicture(direction) {

    }

    renderPicture(pic) {
        const pictureDiv = document.querySelector('.image-container');
        pictureDiv.style.backgroundImage = `url(${pic})`
    }
}

const slideshow = new Slideshow()
slideshow.renderPicture("../img/1.jpg");