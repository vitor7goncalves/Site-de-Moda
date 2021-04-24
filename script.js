let text = document.querySelector('h1.text-h1')
let text2 = document.querySelector('h3.text-h3')
let textArea = document.querySelector('div.text-area')
let point = document.querySelector('img.point')
let barPoint = document.querySelector('div.bar-point');
let time = 1;
let barTime = 0;

function painel() {
    time ++;
    if (time <= 6) {
        text.innerHTML = 'Moda Feminina';
        text2.innerHTML = 'Encontre aqui o seu estilo!';
        point.src = 'assets/Img/Ponto 1.png';
    } else if (time <= 11) {
        text.innerHTML = 'Moda Masculina';
        text2.innerHTML = 'Para o homem moderno!';
        point.src = 'assets/Img/Ponto 2.png';
    }else if(time <= 16){
        text.innerHTML = 'Moda Infantil';
        text2.innerHTML = 'O seu filho na moda!';
        point.src = 'assets/Img/Ponto 3.png';
    }
    if(time >= 16){
        time = 1;
    }
}
function barTimer(){
    barTime ++;
    barPoint.style.width = barTime + 'px';
    if(barTime >=500 ){
        barTime = 0;
    }
}

let rotationImage = setInterval(painel, 1000);
let timeForBar = setInterval(barTimer, 10);
