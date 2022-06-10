const addNew = () => {
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
  const toDoDivsAll = document.querySelectorAll('.todo-item');
  const result = [];
  result[0] = toDoDivsAll.length;
  result[1] = newItem.value;
  return result;
};

export default addNew;