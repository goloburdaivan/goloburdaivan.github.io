let firstElement = document.getElementById('element');
let secondElement = document.querySelector('#element + li');
let firstCounter = 0;
let secondCounter = 0;

firstElement.onclick = () => {
    firstCounter++;
    if (firstCounter % 2 !== 0) {
        firstElement.classList.add('colored');
    } else {
        firstElement.classList.remove('colored');
    }
}

secondElement.onclick = () => {
    secondCounter++;
    if (secondCounter % 2 !== 0) {
        secondElement.classList.add('colored2');
    } else {
        secondElement.classList.remove('colored2');
    }
}

function addImage() {
    document.getElementById('image').hidden = false;
}

function deleteImage() {
    document.getElementById('image').hidden = true;
}

function scaleUpImage() {
    let image = document.getElementById('image');
    image.style.width = (image.clientWidth * 1.5) + 'px';
    image.style.height = (image.clientHeight * 1.5) + 'px';
}

function scaleDownImage() {
    let image = document.getElementById('image');
    image.style.width = (image.clientWidth / 1.5) + 'px';
    image.style.height = (image.clientHeight / 1.5) + 'px';
}