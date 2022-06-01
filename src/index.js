//import _ from 'lodash';
import './style.css';

const toDoItems = [{ 'index': 0, 'description': 'some description', 'completed': true }, { 'index': 1, 'description': 'some description', 'completed': false },
{ 'index': 2, 'description': 'some description', 'completed': false },
{ 'index': 3, 'description': 'some description', 'completed': true }];

const toDoList = document.querySelectorAll('.todo');
const forLable = document.querySelectorAll('.label');
const chkMark = document.querySelectorAll('.fa-check');
const chkBtn = document.querySelectorAll('.fa-square');

const  Iterate = () => {
    chkMark.forEach((chkMark) => {
        chkMark.style.display = 'none';
    });
    chkBtn.forEach((chkBtn) => {
        chkBtn.style.display = 'block';
    });
    for (let i = 0; i < toDoItems.length; i += 1) {
        toDoList[i].innerHTML = toDoItems[i].description;
        toDoList[i].setAttribute('data-hidden', toDoItems[i].completed);
        toDoList[i].setAttribute('id', `${toDoItems[i].index}`);
        forLable[i].setAttribute('for', `${toDoItems[i].index}`);
    }
}

Iterate();