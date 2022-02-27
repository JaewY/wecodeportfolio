const hobbyBtn = document.querySelector('#hobby');
const favoriteBtn = document.querySelector('#favorite');
const contactBtn = document.querySelector('#contact');

hobbyBtn.addEventListener('click', () => {
    consol
    hobbyBtn.classList.add('clicked');
})

favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.add('clicked');
})

contactBtn.addEventListener('click', () => {
    console.log('das');
    contactBtn.classList.add('clicked');
})