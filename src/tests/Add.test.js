/**
 * @jest-environment jsdom
 */

import addNewItem from '../Add.js';

jest.mock('../Add.js');

describe('Testing Task added to object array', () => {
    test('check task description', () => {
        expect(addNewItem()[0]).toBe(1);
    });

    test('chack task name is First', () => {
        expect(addNewItem()[1]).toBe('First');
    });
});