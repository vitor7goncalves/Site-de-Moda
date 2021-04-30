let clock = 5000,
    currentImageIndex = 0,
    image = document.querySelectorAll('#models img'),
    max = image.length,
    onDrop = document.querySelector('h4.street'),
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
    barPoint.style.width = barTime *4 + '%';
    if(barTime >=100 ){
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

function drop(){
    onDrop.style.opacity = "1";
    onDrop.style.marginLeft = "-400px";
}
function noDrop(){
    onDrop.style.opacity = "0";
    onDrop.style.marginLeft = "-500px";
}

window.addEventListener('load', start);
let timeForBar = setInterval(barTimer, 50);