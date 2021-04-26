let clock = 5000,
    currentImageIndex = 0,
    image = document.querySelectorAll('#models img'),
    max = image.length,
    barTime = 0;

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
function barTimer(){
    barTime ++;
    barPoint.style.width = barTime + 'px';
    if(barTime >=500 ){
        barTime = 0;
    }
}
function manualBar(){
    barTime = 500;
}


function start() {
    setInterval(() => {
        slider();
    }, clock)
}

window.addEventListener('load', start);
let timeForBar = setInterval(barTimer, 10);