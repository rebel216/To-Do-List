import LocalStorageMock from './List.js';

const localStore = new LocalStorageMock();
const toDoItems = [];
localStore.setItem('storedToDoList', []);

export const checkedItem = () => {
  // Store two completed items
  const firstTask = { description: 'First', completed: true, index: 0 };
  toDoItems.push(firstTask);
  localStore.setItem('storedToDoList', toDoItems);
  const secondTask = { description: 'Second', completed: true, index: 1 };
  toDoItems.push(secondTask);
  localStore.setItem('storedToDoList', toDoItems);
  return toDoItems;
};

const toDoDiv1 = document.createElement('div');
const toDoDiv2 = document.createElement('div');

export const createCompleted = () => {
  // Created two DOM items
  document.body.innerHTML = `
    <form class="add-new white-height">
      <input class="no-outline" maxlength="128"
        id="new-item"
        type="text"
        placeholder="Add to your list ..."
      />
      <i class="fas fa-level-down-alt"></i>
    </form>
    <div class="full-list"></div>
  `;
  // Created the first DOM item
  const firstItem = document.getElementById('new-item');
  firstItem.value = 'First';
  toDoDiv1.classList.add('todo-item', 'white-height');
  toDoDiv1.innerText = firstItem.value;
  const fullList = document.querySelector('.full-list');
  fullList.appendChild(toDoDiv1);
  // Created the second DOM item
  const secondItem = document.getElementById('new-item');
  secondItem.value = 'Second';
  toDoDiv2.classList.add('todo-item', 'white-height');
  toDoDiv2.innerText = secondItem.value;
  fullList.appendChild(toDoDiv2);
  let result = 0;
  const toDoDivsAll = document.querySelectorAll('.todo-item');
  result = toDoDivsAll.length;
  return result;
};

export const btnClear = () => {
  // Simulate clearAll button and remove the checked items from DOM
  toDoDiv1.remove();
  toDoDiv2.remove();
  const clear = [];
  clear[0] = document.querySelectorAll('.todo-item').length;
  // Remove the two checked items from the array
  toDoItems.splice(0);
  localStore.setItem('storedToDoList', toDoItems);
  clear[1] = toDoItems.length;
  return clear;
};