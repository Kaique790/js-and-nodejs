import { checkInput, checkTextarea } from './validations.js';

const form = document.getElementById('form');
const userInput = document.getElementById('user');
const subjectInput = document.getElementById('subject');
const contentInput = document.getElementById('addpost');

// check form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isUserValid = checkInput(userInput);
    const isSubjectValid = checkInput(subjectInput);
    const isContentValid = checkTextarea(contentInput);

    if (isUserValid && isSubjectValid && isContentValid) {
        form.submit();
    } else {
        console.log('Campos não foram preenchidos corretamente');
    }
});


