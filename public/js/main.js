const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.btn-hamburger');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
})