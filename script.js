let image = document.querySelector('div.models')
let text = document.querySelector('h1.text-h1')
let clock = 0;

function painel() {
    clock++;
    if (clock == 1) {
        image.style.backgroundImage = 'url(https://turinha-static.pkds.it/blog/production/2019/09/11103318/competitividade-e-bom.jpg)'
        text.innerHTML = 'Moda Infantil';
    } else if (clock == 6) {
        image.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg)'
        text.innerHTML = 'Moda Feminina';
    }
    if(clock >= 10){
        clock = 0;
    }
}

let time = setInterval(painel, 1000);