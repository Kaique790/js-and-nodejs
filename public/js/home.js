const inputs = document.getElementsByTagName('input')
form = document.getElementById('form')

function addErro(input) {
    input.classList.add('erro')
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('oi')
})