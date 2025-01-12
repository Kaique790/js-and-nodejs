form = document.getElementById('form');
const userInput = document.getElementById('user');
const subjectInput = document.getElementById('subject');
const postInput = document.getElementById('addpost');

function addError(input) {
    input.classList.add('error');
};

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkUserinput(); 
    checkSubjectinput();
    checkPostinput();

    if( checkUserinput() || checkSubjectinput() || checkPostinput()) {
        form.submit();
    } else {
        console.log('Campos não foram preenchidos')
    }
});

function checkUserinput() {
    userInputValue = userInput.value;
    if(userInputValue === "") {
        addError(userInput);
        return false
    } else {
        userInput.classList.remove('error');
        return true
    };
};

function checkSubjectinput() {
    subjectInputValue = subjectInput.value;
    if(subjectInputValue === "") {
        subjectInput.classList.add('error');
        return false;
    } else {
        subjectInput.classList.remove('error');
        return true
    };
};

function checkPostinput() {
    postInputValue = postInput.value;
    if(postInputValue === "") {
        postInput.style.border = '1px solid red';
        return false;
    } else {
        postInput.style.border = 'none'
        return true
    };
};