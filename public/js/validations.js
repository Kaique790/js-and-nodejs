export function checkInput(input) {
    const inputValue = input.value;
    if(inputValue === "") {
        input.classList.add('error');
        return false;
    } else {
        input.classList.remove('error');
        return true;
    };
};

export function checkTextarea(textarea) {
    const textareaValue = textarea.value;
    if(textareaValue === "") {
        textarea.style.border = '2px solid red';
        return false;
    } else {
        textarea.style.border = 'none'
        return true;
    };
};