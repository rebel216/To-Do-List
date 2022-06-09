import LocalStorageMock from './List.js';

const localstorage = new LocalStorageMock();
const toDoItems = [];
localstorage.setItem('storedToDoList', []);

export const completedItem = () => { 
  const firstTask = { description: 'First', completed: false, index: 0 };
  toDoItems.push(firstTask);
  localstorage.setItem('storedToDoList', toDoItems);
  return toDoItems[0].completed;
};

export const check = () => { 
  const changedTask = true;
  toDoItems[0].completed = changedTask;
  localstorage.setItem('storedToDoList', toDoItems);
  return toDoItems[0].completed;
};