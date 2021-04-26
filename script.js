let text = document.querySelector('h1.text-h1')
let text2 = document.querySelector('h3.text-h3')
let textArea = document.querySelector('div.text-area')
let point = document.querySelector('img.point')
let barPoint = document.querySelector('div.bar-point');
let time = 2;

function painel() {
    time ++;
    if (time === 2) {
        text.innerHTML = 'Moda Feminina';
        text2.innerHTML = 'Encontre aqui o seu estilo!';
        point.src = 'assets/Img/Ponto 1.png';
    } else if (time === 3) {
        text.innerHTML = 'Moda Masculina';
        text2.innerHTML = 'Para o homem moderno!';
        point.src = 'assets/Img/Ponto 2.png';
    }else if(time === 4){
        text.innerHTML = 'Moda Infantil';
        text2.innerHTML = 'O seu filho na moda!';
        point.src = 'assets/Img/Ponto 3.png';
    }
    if(time === 4){
        time = 1;
    }
}

let rotationImage = setInterval(painel, 5000);

