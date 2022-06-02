import { toDoItems, showItems, checkButton } from './List.js';
import { editToDo } from './Remove.js';

function ToDoItem(description, completed , index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
}

const enter = document.querySelector('.fa-level-down-alt');
let toDoDivsAll = document.querySelectorAll('.todo-item');
const fullList = document.querySelector('.full-list');
const newItem = document.getElementById('new-item');
let toDoText = document.querySelectorAll('.todo');
let numberIndex = 0;
let itemText = '';

function hitEnter() {
    enter.addEventListener('click', () => {
        newItem.value = '';
    });
}

function context() {
    toDoDivsAll = document.querySelectorAll('.todo-item');
    numberIndex = toDoDivsAll.length;
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo-item', 'white-height');
    toDoDiv.setAttribute('data-id', `${numberIndex}`);
    toDoDiv.innerHTML = `
  <div class='check-description'>
    <i class='far fa-square' data-id='${numberIndex}'></i>
    <i class='fas fa-check' data-id='${numberIndex}'></i>
    <div class='view'>
      <label class='label' for='${numberIndex}'></label>
      <textarea class='todo' title='description' maxlength='128' id='${numberIndex}'></textarea>
    </div>
  </div>
  <i class='fas fa-ellipsis-v' data-id='${numberIndex}'></i>
  <i class="far fa-trash-alt hide" data-id='${numberIndex}'></i>
  `;
    fullList.appendChild(toDoDiv);
}

function addNewItem() {
    const onfocusout = () => {
        itemText = newItem.value;
        if (itemText !== '') {
            newItem.value = '';
            hitEnter();
            context();
            toDoText = document.querySelectorAll('.todo');
            const textArea = toDoText[numberIndex];
            textArea.innerText = itemText;
            toDoItems.push(new ToDoItem(itemText, false, numberIndex));
            localStorage.setItem('toDoList', JSON.stringify(toDoItems));
            toDoDivsAll = document.querySelectorAll('.todo-item');
            numberIndex = toDoDivsAll.length;
            showItems();
            checkButton();
            editToDo([textArea]);
        }
    };
    newItem.addEventListener('keyup', ({ key }) => {
        if (key === 'Enter') {
            onfocusout();
        }
    });
    newItem.addEventListener('focusout', onfocusout);
}

function displayStored() {
    for (let i = 0; i < toDoItems.length; i += 1) {
        context();
        toDoText = document.querySelectorAll('.todo');
        toDoText[i].innerText = toDoItems[i].description;
        showItems();
        checkButton();
    }
    addNewItem();
    numberIndex = toDoItems.length;
}

export { addNewItem, context, displayStored };