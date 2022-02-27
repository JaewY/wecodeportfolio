const favorite1 = document.querySelector('.favorite1');
const favorite2 = document.querySelector('.favorite2');
const favorite3 = document.querySelector('.favorite3');

const favorite = [favorite1, favorite2, favorite3];

favorite1.addEventListener('click', () => {
    favorite1.style.transform = 'rotate(0deg)';
});

favorite2.addEventListener('click', () => {
    favorite2.style.transform = 'rotate(0deg)';
});

favorite3.addEventListener('click', () => {
    favorite3.style.transform = 'rotate(0deg)';
});
