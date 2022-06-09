const removeItem = () => {
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
  const firstItem = document.getElementById('new-item');
  firstItem.value = 'First';
  const toDoDiv1 = document.createElement('div');
  toDoDiv1.classList.add('todo-item', 'white-height');
  toDoDiv1.innerText = firstItem.value;
  const fullList = document.querySelector('.full-list');
  fullList.appendChild(toDoDiv1);
  const secondItem = document.getElementById('new-item');
  secondItem.value = 'Second';
  const toDoDiv2 = document.createElement('div');
  toDoDiv2.classList.add('todo-item', 'white-height');
  toDoDiv2.innerText = secondItem.value;
  fullList.appendChild(toDoDiv2);
  let result = 2;
  toDoDiv1.remove();
  const toDoDivsAll = document.querySelectorAll('.todo-item');
  result = toDoDivsAll.length;
  return result;
};

export default removeItem;