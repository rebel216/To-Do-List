/**
 * @jest-environment jsdom
 */
import LocalStorageMock from '../__mocks__/List.js';
import { check, completedItem } from '../__mocks__/completed.js';

describe('Simulate changing status', () => {
  const localStore = new LocalStorageMock();
  let toDoItems = [];

  test('First item is not completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    localStore.setItem('storedToDoList', toDoItems);
    expect(completedItem()).toBe(false);
  });

  test('First item is completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    localStore.setItem('storedToDoList', toDoItems);
    expect(check()).toBe(true);
  });
});