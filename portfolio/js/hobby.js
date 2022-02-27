const hobby1 = document.querySelector('.hobby1');
const hobby2 = document.querySelector('.hobby2');
const hobby3 = document.querySelector('.hobby3');

const hobby = [hobby1, hobby2, hobby3];

hobby1.addEventListener('click', () => {
    hobby1.style.transform = 'rotate(0deg)';
});

hobby2.addEventListener('click', () => {
    hobby2.style.transform = 'rotate(0deg)';
});

hobby3.addEventListener('click', () => {
    hobby3.style.transform = 'rotate(0deg)';
});