/**
 * @jest-environment jsdom
 */

import LocalStorageMock from '../__mocks__/List.js';

describe('Local storage test', () => {
  const localStore = new LocalStorageMock();
  const toDoItems = [];
  localStore.setItem('storedToDoList', []);

  test('Storing the first task to local storage', () => {
    const firstTask = { description: 'First', completed: false, index: 0 };
    toDoItems.push(firstTask);
    localStore.setItem('storedToDoList', toDoItems);
    expect(localStore.getItem('storedToDoList').length).toBe(1);
  });
});