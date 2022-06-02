const toDoItems = [];

let checkBtn = document.querySelectorAll('.index');
let checkMark = document.querySelectorAll('.fa-check');
let toDoText = document.querySelectorAll('.todo');
let markId;
let btnId;

function getStatus() {
    if (localStorage.length === 0) {
        localStorage.clear();
    } else {
        const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
        toDoItems.length = 0;
        toDoItems.push(...storedToDoList);
    }
    return toDoItems;
}

function showItems() {
    const currentItems = getStatus();
    checkBtn = document.querySelectorAll('.fa-square');
    checkMark = document.querySelectorAll('.fa-check');
    toDoText = document.querySelectorAll('.todo');
    for (let i = 0; i < checkBtn.length; i += 1) {
        if (currentItems[i].completed) {
            checkMark[i].style.display = 'block';
            checkMark[i].style.color = '#36B0E9';
            checkBtn[i].style.display = 'none';
            toDoText[i].style.textDecoration = 'line-through';
            toDoText[i].style.color = 'lightgrey';
        } else {
            checkMark[i].style.display = 'none';
            checkBtn[i].style.display = 'block';
            toDoText[i].style.textDecoration = 'none';
            toDoText[i].style.color = 'black';
        }
    }
}

function checkButton() {
    const btn = checkBtn[checkBtn.length - 1];
    btn.addEventListener('click', () => {
        btnId = btn.getAttribute('data-id');
        toDoItems[+btnId].completed = true;
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        showItems();
    });
    const mark = checkMark[checkMark.length - 1];
    mark.addEventListener('click', () => {
        markId = mark.getAttribute('data-id');
        toDoItems[+markId].completed = false;
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        showItems();
    });
}

export {
    checkButton, showItems, toDoItems, getStatus,
};