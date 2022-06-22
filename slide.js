function barTimer() {
    barTime++;
    barPoint.style.width = barTime * 4 + '%';
    if (barTime >= 100) {
        barTime = 0;
        time++;
    }
    if (time === 4) {
        time = 1;
    }
    if (time === 1) {
        text.innerHTML = 'Moda Feminina';
        text2.innerHTML = 'Encontre aqui o seu estilo!';
        point.src = 'assets/Img/Ponto 1.png';
        imgFemale();
    } else if (time === 2) {
        text.innerHTML = 'Moda Masculina';
        text2.innerHTML = 'Para o homem moderno!';
        point.src = 'assets/Img/Ponto 2.png';
        imgMale();
    } else if (time === 3) {
        text.innerHTML = 'Moda Infantil';
        text2.innerHTML = 'O seu filho na moda!';
        point.src = 'assets/Img/Ponto 3.png';
        imgChildren();
    }
}
function manualBarPlus() {
    barTime = 500;
}
function manualBarLesser() {
    barTime = 0;
    time--;
    if(time <= 0){
        time = 3;
    }
}
let timeForBar = setInterval(barTimer, 50);