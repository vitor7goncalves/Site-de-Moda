let clock = 5000,
    currentImageIndex = 0,
    image = document.querySelectorAll('#models img'),
    max = image.length;

function slider() {

    image[currentImageIndex].classList.remove('selected');

    currentImageIndex++;

    if (currentImageIndex >= max) {
        currentImageIndex = 0;
    } else if (currentImageIndex <= -1) {
        currentImageIndex = 2;
    }

    image[currentImageIndex].classList.add('selected');

}


function start() {
    setInterval(() => {
        slider();
    }, clock)
}

window.addEventListener('load', start);