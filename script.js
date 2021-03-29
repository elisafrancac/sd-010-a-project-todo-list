const getButton = document.querySelector('.botao-tarefa');
const getInput = document.getElementById('texto-tarefa');
const getList = document.getElementById('lista-tarefas');
const getClear = document.querySelector('#apaga-tudo');
const getClearDone = document.getElementById('remover-finalizados');
const getSave = document.getElementById('salvar-tarefas');

function clearSelecteds() {
  const items = document.querySelectorAll('li');
  for (let index = 0; index < items.length; index += 1) {
    items[index].style.backgroundColor = 'transparent';
  }
}

function riskItem() {
  if (this.className === '') {
    this.className = 'completed';
  } else {
    this.className = '';
  }
}

function selectItem() {
  const painter = this.style;
  painter.backgroundColor = 'rgb(128, 128, 128)';
}

function insertTask() {
  if (getInput.value !== '') {
    const task = document.createElement('li');
    task.innerText = getInput.value;
    getList.appendChild(task);
    task.addEventListener('click', clearSelecteds);
    task.addEventListener('click', selectItem);
    task.addEventListener('dblclick', riskItem);
  }
}

function clearInput() {
  getInput.value = '';
}

function clearList() {
  const getItems = document.querySelectorAll('li');

  for (let index = 0; index < getItems.length; index += 1) {
    getList.removeChild(getList.lastChild);
  }
}

function clearDone() {
  const done = document.querySelectorAll('li');

  for (let index = 0; index < done.length; index += 1) {
    if (done[index].className === 'completed') {
      done[index].remove();
    }
  }
}

const savedList = [];

function storageItems() {
  localStorage.removeItem('savedList');
  localStorage.setItem('savedList', JSON.stringify(savedList));
}

function saveItems() {
  savedList.splice(0);
  const listItems = document.querySelectorAll('li');

  listItems.forEach((element) => {
    if (element.className === 'completed') {
      savedList.push({ task: element.innerText, done: true });
    } else {
      savedList.push({ task: element.innerText, done: false });
    }
  });

  storageItems();
}

getButton.addEventListener('click', insertTask);
getButton.addEventListener('click', clearInput);
getClear.addEventListener('click', clearList);
getClearDone.addEventListener('click', clearDone);
getSave.addEventListener('click', saveItems);

window.onload = function loadedPage() {
  const savedBefore = localStorage.getItem('savedList');
  const loadedList = JSON.parse(savedBefore);

  loadedList.forEach((element, i) => {
    const taskStored = document.createElement('li');
    taskStored.innerText = (loadedList[i].task);
    taskStored.style.backgroundColor = 'transparent';
    taskStored.addEventListener('click', clearSelecteds);
    taskStored.addEventListener('click', selectItem);
    taskStored.addEventListener('dblclick', riskItem);

    if (loadedList[i].done === true) {
      taskStored.className = 'completed';
    }
    getList.appendChild(taskStored);
  });
};
