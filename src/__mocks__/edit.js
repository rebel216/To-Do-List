import LocalStorageMock from './List.js';

const edit = () => {
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
  const newItem = document.getElementById('new-item');
  newItem.value = 'First';
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo-item', 'white-height');
  toDoDiv.innerText = newItem.value;
  const fullList = document.querySelector('.full-list');
  fullList.appendChild(toDoDiv);
  // Edit the first item, mocks edit function
  newItem.value = 'Second';
  toDoDiv.innerText = newItem.value;
  const toDoDivsAll = document.querySelectorAll('.todo-item');
  const result = [];
  // Save the changed item in the localStorage
  const localStore = new LocalStorageMock();
  const toDoItems = [];
  localStore.setItem('storedToDoList', []);
  const firstTask = { description: 'Second', completed: false, index: 0 };
  toDoItems.push(firstTask);
  localStore.setItem('storedToDoList', toDoItems);
  result[0] = toDoDivsAll.length;
  result[1] = newItem.value;
  return result;
};

export default edit;