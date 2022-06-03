import { getStatus, showItems } from './List.js';

let textFields = document.querySelectorAll('.todo');
let dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
let trashIcon = document.querySelectorAll('.fa-trash-alt');
let allDivs = document.querySelectorAll('.todo-item');
let label = document.querySelectorAll('.label');
let checkBtn = document.querySelectorAll('.index');
let checkMark = document.querySelectorAll('.fa-check');
let fieldId;

function getCurrent() {
    textFields = document.querySelectorAll('.todo');
    dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
    trashIcon = document.querySelectorAll('.fa-trash-alt');
    allDivs = document.querySelectorAll('.todo-item');
    label = document.querySelectorAll('.label');
    checkBtn = document.querySelectorAll('.fa-square');
    checkMark = document.querySelectorAll('.fa-check');
}

function sortToDo(fieldId) {
    getCurrent();
    const unsortedItems = getStatus();
    for (let i = fieldId; i < unsortedItems.length; i += 1) {
        unsortedItems[i].index = i;
        allDivs[i].setAttribute('data-id', i);
        checkBtn[i].setAttribute('data-id', i);
        checkMark[i].setAttribute('data-id', i);
        dotsIcon[i].setAttribute('data-id', i);
        trashIcon[i].setAttribute('data-id', i);
        label[i].setAttribute('for', i);
        textFields[i].setAttribute('id', i);
    }
    localStorage.setItem('toDoList', JSON.stringify(unsortedItems));
    getStatus();
}

function editToDo(textFieldsLocal) {
    textFields = document.querySelectorAll('.todo');
    if (textFieldsLocal === undefined) {
        textFieldsLocal = textFields;
    }
    // Select a todo item field
    textFieldsLocal.forEach((field) => {
        field.addEventListener('click', () => {
            fieldId = +field.getAttribute('id');
            const listItem = field.parentNode.parentNode.parentNode;
            const dotsIcon = listItem.querySelector('.fa-ellipsis-v');
            const trashIcon = listItem.querySelector('.fa-trash-alt');
            listItem.style.backgroundColor = 'lightyellow';
            field.style.backgroundColor = 'lightyellow';
            dotsIcon.classList.add('hide');
            trashIcon.classList.remove('hide');
            // Delete function
            trashIcon.addEventListener('mousedown', () => {
                const storedItems = getStatus();
                let str;
                listItem.remove();
                str = storedItems.filter(storedItems => storedItems.index !== fieldId);
                localStorage.setItem('toDoList', JSON.stringify(str));
                sortToDo(fieldId);
                showItems();
                fieldId = undefined;
            });
            // Edit todo item
            field.addEventListener('keyup', () => {
                const storedItems = getStatus();
                const editedString = listItem.querySelector('.todo').value;
                storedItems[fieldId].description = editedString;
                localStorage.setItem('toDoList', JSON.stringify(storedItems));
            });
            // Toggle the background and icons on focus
            field.addEventListener('focusout', () => {
                listItem.style.backgroundColor = 'white';
                field.style.backgroundColor = 'white';
                dotsIcon.classList.remove('hide');
                trashIcon.classList.add('hide');
            });
        });
    });
}

function clearCompleted() {
    const btnClear = document.getElementById('clearTask');
    btnClear.addEventListener('click', () => {
        const markedItems = getStatus();
        let str;
        let Id;
        for (let i = 0; i < markedItems.length; i += 1) {
            if (markedItems[i].completed === true) {
                Id = markedItems[i].index;
                getCurrent();
                allDivs[i].remove();
                str = markedItems.filter(markedItems => markedItems.index !== Id);
                localStorage.setItem('toDoList', JSON.stringify(str));
                getStatus();
                sortToDo(i);
                showItems();
                i -= 1;
            }
        }
       
    });
}

export { editToDo, clearCompleted };