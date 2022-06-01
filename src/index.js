//import _ from 'lodash';
import './style.css';

const toDoItems = [{ 'index': 0, 'description': 'some description1', 'completed': true }, { 'index': 1, 'description': 'some description', 'completed': false },
{ 'index': 2, 'description': 'some description2', 'completed': false },
{ 'index': 3, 'description': 'some description3', 'completed': true }];


const forLable = document.querySelectorAll('.label');
const chkMark = document.querySelectorAll('.fa-check');
const chkBtn = document.querySelectorAll('.fa-square');

const Iterate = () => {
    const toDoList = document.getElementById('todo');
        
    for (let i = 0; i < toDoItems.length; i += 1) {
        const item = document.createElement('li')
        item.setAttribute('id', toDoItems[i].id);
        item.innerHTML = toDoItems[i].description;
        toDoList.appendChild(item);
    }
   
}

Iterate();