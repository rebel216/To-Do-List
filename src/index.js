import './style.css';
import { getStatus } from './List.js';
import { displayStored } from './Add.js';
import { editToDo, clearCompleted } from './Remove.js';

function main() {
    getStatus();
    displayStored();
    editToDo();
    clearCompleted();
}

main();