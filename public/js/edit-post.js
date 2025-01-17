const formEdit = document.getElementById('form-edit')
const subjectInputEdit = document.getElementById('subject-edit');
const contentInputEdit = document.getElementById('edit-content');
import { checkInput, checkTextarea } from './validations.js';

formEdit.addEventListener('submit', (e) => {
    e.preventDefault();

    const isSubjectValid = checkInput(subjectInputEdit);
    const isContentValid = checkTextarea(contentInputEdit);

    if(isSubjectValid && isContentValid) {
        formEdit.submit();
    } else {
        console.log('Campos vazios')
    }
})