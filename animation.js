function drop() {
    onDrop.style.opacity = "1";
    onDrop.style.marginLeft = "-400px";
}
function noDrop() {
    onDrop.style.opacity = "0";
    onDrop.style.marginLeft = "-500px";
}
function femaleOn() {
    femaleDrop.style.opacity = "1";
    femaleDrop.style.visibility = "visible";
}
function femaleOff() {
    femaleDrop.style.opacity = "0";
    femaleDrop.style.visibility = "hidden";
}
function maleOn() {
    maleDrop.style.opacity = "1";
    maleDrop.style.visibility = "visible";
}
function maleOff() {
    maleDrop.style.opacity = "0";
    maleDrop.style.visibility = "hidden";
}
function childrensOn() {
    childrensDrop.style.opacity = "1";
    childrensDrop.style.visibility = "visible";
}
function childrensOff() {
    childrensDrop.style.opacity = "0";
    childrensDrop.style.visibility = "hidden";
}
function imgFemale() {
    imageFemale.style.opacity = "1";
    imageFemale.style.visibility = "visible";
    imageMale.style.opacity = "0";
    imageMale.style.visibility = "hidden";
    imageChildren.style.opacity = "0";
    imageChildren.style.visibility = "hidden";
}
function imgMale() {
    imageFemale.style.opacity = "0";
    imageFemale.style.visibility = "hidden";
    imageMale.style.opacity = "1";
    imageMale.style.visibility = "visible";
    imageChildren.style.opacity = "0";
    imageChildren.style.visibility = "hidden";
}
function imgChildren() {
    imageFemale.style.opacity = "0";
    imageFemale.style.visibility = "hidden";
    imageMale.style.opacity = "0";
    imageMale.style.visibility = "hidden";
    imageChildren.style.opacity = "1";
    imageChildren.style.visibility = "visible";
}