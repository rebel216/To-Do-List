/**
 * @jest-environment jsdom
 */

import { createCompleted, checkedItem, btnClear } from '../__mocks__/clearAll.js';
import LocalStorageMock from '../__mocks__/List.js';

const localStore = new LocalStorageMock();
localStore.setItem('storedToDoList', []);

describe('Clear all completed test', () => {
  test('Check  two items in the DOM', () => {
    expect(createCompleted()).toBe(2);
  });



  test('There are no items in the DOM ? test', () => {
    expect(btnClear()[0]).toBe(0);
  });

  test('Check that localStorage is empty ?', () => {
    expect(btnClear()[1]).toBe(0);
  });
  test('Check we have 2 completed items in local storage', () => {
    expect(checkedItem().length).toBe(2);
  });

  test('Is first item cpmleted ? test', () => {
    expect(checkedItem()[0].completed).toBe(true);
  });

  test('Is 2nd item cpmleted ? test', () => {
    expect(checkedItem()[1].completed).toBe(true);
  });

 
});