let onDrop = document.querySelector('h4.street');
let femaleDrop = document.querySelector('div.painel-female');

function drop(){
    onDrop.style.opacity = "1";
    onDrop.style.marginLeft = "-400px";
}
function noDrop(){
    onDrop.style.opacity = "0";
    onDrop.style.marginLeft = "-500px";
}
function femaleOn(){
    femaleDrop.style.opacity = "1";
    femaleDrop.style.visibility = "visible";
}
function femaleOff(){
    femaleDrop.style.opacity = "0";
    femaleDrop.style.visibility = "hidden";
}