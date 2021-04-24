let image = document.querySelector('img.models')
let text = document.querySelector('h1.text-h1')
let text2 = document.querySelector('h3.text-h3')
let textArea = document.querySelector('div.text-area')
let point = document.querySelector('img.point')
let barPoint = document.querySelector('div.bar-point');
let time = 0;
let barTime = 0;

function painel() {
    time ++;
    if (time <= 5) {
        image.src = 'assets/Img/woman-1274361_1920.png';
        image.style.right = '5%';
        textArea.style.backgroundImage = 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1),  rgba(255,255,255,1),  rgba(255,255,255,.01))';
        textArea.style.marginLeft = '160px';
        text.innerHTML = 'Moda Feminina';
        text2.innerHTML = 'Encontre aqui o seu estilo!';
        point.src = 'assets/Img/Ponto 1.png';
    } else if (time <= 10) {
        image.src = 'assets/Img/pexels-andrea-piacquadio-832998.png'
        image.style.right = '28.1%';
        textArea.style.backgroundImage = 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,1),  rgba(255,255,255,1),  rgba(255,255,255,.01))';
        textArea.style.marginLeft = '600px';
        text.innerHTML = 'Moda Masculina';
        text2.innerHTML = 'Para o homem moderno!';
        point.src = 'assets/Img/Ponto 2.png';
    }else if(time <= 15){
        image.src = 'assets/Img/competitividade-e-bom.png'
        image.style.right = '5%';
        textArea.style.backgroundImage = 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,1),  rgba(255,255,255,1),  rgba(255,255,255,.01))';
        textArea.style.marginLeft = '160px';
        text.innerHTML = 'Moda Infantil';
        text2.innerHTML = 'O seu filho na moda!';
        point.src = 'assets/Img/Ponto 3.png';
    }
    if(time >= 15){
        time = 0;
    }
}
function barTimer(){
    barTime ++;
    barPoint.style.width = barTime + 'px';
    if(time >= 6 ){
        barTime = 0;
    }
}

let rotationImage = setInterval(painel, 1000);
let timeForBar = setInterval(barTimer, 10);