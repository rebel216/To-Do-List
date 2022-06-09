/**
 * @jest-environment jsdom
 */

import addNew from '../Add.js';
import edit from '../__mocks__/edit.js';

jest.mock('../Add.js');

describe('Testing edit', () => {
  test('Check if the name equals First', () => {
    expect(addNew()[1]).toBe('First');
  });

  test('Check if the name have changed. It is now "Second"', () => {
    expect(edit()[1]).not.toBe('First');
  });

  test('Check if the stored item in the localStorage has the description changed', () => {
    expect(edit()[1]).toBe('Second');
  });
});