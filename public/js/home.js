const form = document.getElementById('form');
const userInput = document.getElementById('user');
const subjectInput = document.getElementById('subject');
const contentInput = document.getElementById('addpost');


// check form
function addError(input) {
    input.classList.add('error');
};

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isUserValid = checkInput(userInput);
    const isSubjectValid = checkInput(subjectInput);
    const isContentValid = checkTextarea(contentInput);

    if(isUserValid && isSubjectValid && isContentValid) { 
        form.submit(); 
    } else { 
        console.log('Campos não foram preenchidos corretamente'); 
    }
});

function checkInput(input) {
    InputValue = input.value;
    if(InputValue === "") {
        input.classList.add('error');
        return false;
    } else {
        input.classList.remove('error');
        return true;
    };
};

function checkTextarea(textarea) {
    textareaValue = textarea.value;
    if(textareaValue === "") {
        textarea.style.border = '2px solid red';
        return false;
    } else {
        textarea.style.border = 'none'
        return true;
    };
};

