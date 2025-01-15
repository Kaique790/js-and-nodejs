const topPage = document.getElementById('top-page')
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.btn-hamburger');

topPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
})