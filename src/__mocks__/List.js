class LocalStorageMock {
  constructor() {
    this.toDoList = {};
  }

  getItem(key) {
    return this.toDoList[key];
  }

  setItem(key, value) {
    this.toDoList[key] = value;
  }
}

export default LocalStorageMock;