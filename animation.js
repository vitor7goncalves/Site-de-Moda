let onDrop = document.querySelector('h4.street');
let femaleDrop = document.querySelector('div.painel-female');
let maleDrop = document.querySelector('div.painel-male');
let childrensDrop = document.querySelector('div.painel-childrens');

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
function maleOn(){
    maleDrop.style.opacity = "1";
    maleDrop.style.visibility = "visible";
}
function maleOff(){
    maleDrop.style.opacity = "0";
    maleDrop.style.visibility = "hidden";
}
function childrensOn(){
    childrensDrop.style.opacity = "1";
    childrensDrop.style.visibility = "visible";
}
function childrensOff(){
    childrensDrop.style.opacity = "0";
    childrensDrop.style.visibility = "hidden";
}