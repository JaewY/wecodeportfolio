const photo = document.querySelector('.photo');
const paper1 = document.querySelector('.paper1');
const paper2 = document.querySelector('.paper2');
const notice = document.querySelector('.notice');
const description = document.querySelector('.description');
const paper3 = document.querySelector('.paper3');
const paper4 = document.querySelector('.paper4');

function photoHandler() {
    photo.style.transform = 'translate(250px,-50px)';
    photo.style.transition = 'all ease-in 300ms';
    photo.style.zIndex = '5';
    paper2.style.display = 'block';
}

function paperHandler() {
    paper1.style.transform = 'translate(300px,0px) rotate(10deg)';
    paper1.style.transition = 'all ease-in 800ms';
    paper2.style.transform = 'translate(-180px,0px)';
    paper2.style.transition = 'all ease-in 700ms';
    paper3.style.transform = 'translate(-270px, -20px) scale(1.1) rotate(-15deg)';
    paper3.style.transition = 'all ease-in 500ms';
    paper4.style.transform = 'translate(-250px, -40px)  scale(1.1) rotate(10deg)';
    paper4.style.transition = 'all ease-in 300ms';
    notice.style.display = 'block';
}

function paperOverHandler() {
    paperHandler();
}

function photoClickHandler() {
    photoHandler();
    paper4.style.transform = 'translate(-250px, -40px) rotate(0deg)';
    paper4.style.transition = 'all ease-in 500ms';
    description.style.display = 'block';
}

paper4.addEventListener('mouseover', paperOverHandler);
photo.addEventListener('click', photoClickHandler);