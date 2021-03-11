window.onload = () => {
  if (localStorage.length >= 1) {
    const storedList = localStorage.getItem('listSaved');
    const changeList = document.getElementById('lista-tarefas');
    changeList.outerHTML = storedList;
  }
};

const buttonAddTask = document.getElementById('criar-tarefa');
const buttonClearList = document.getElementById('apaga-tudo');
const buttonRemoveCompleteTask = document.getElementById('remover-finalizados');
const buttonRemoveTask = document.getElementById('remover-selecionado');
const buttonSaveTask = document.getElementById('salvar-tarefas');

function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const textList = document.getElementById('texto-tarefa').value;
  const taskItems = document.createElement('li');

  taskItems.innerText = textList;
  taskList.appendChild(taskItems);
}

function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

buttonAddTask.addEventListener('click', createTask);
buttonAddTask.addEventListener('click', clearInput);

function clearSelectedTasks() {
  const clearIems = document.querySelectorAll('li');
  for (let index = 0; index < clearIems.length; index += 1) {
    clearIems[index].classList.remove('li-color');
  }
}

function changeBgList(event) {
  const listSelect = event.target;
  clearSelectedTasks();
  // listSelect.setAttribute('style', 'background-color: rgb(128, 128, 128);');
  listSelect.classList.add('li-color');
}

document.getElementById('lista-tarefas').addEventListener('click', changeBgList);

function completeTasks(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed') === true) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completeTasks);

function clearList() {
  // Depois de tentativas usando o For, eu acabei encontrando essa explicação sobre o while, pois enquanto houver First Child da Lista, ele irá ex cluindo o conteúdo (link = https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/) //
  const clearTasks = document.getElementById('lista-tarefas');
  while (clearTasks.firstChild) {
    clearTasks.removeChild(clearTasks.firstChild);
  }
}

buttonClearList.addEventListener('click', clearList);

function clearCheckTasks() {
  const clearTask = document.querySelectorAll('.completed');
  for (let index = 0; index < clearTask.length; index += 1) {
    clearTask[index].remove();
  }
}

buttonRemoveCompleteTask.addEventListener('click', clearCheckTasks);

function removeTaskSelected() {
  const taskSelect = document.querySelector('.li-color');
  taskSelect.remove();
}

buttonRemoveTask.addEventListener('click', removeTaskSelected);

function saveList() {
  const arrayList = document.getElementById('lista-tarefas');
  localStorage.setItem('listSaved', arrayList.outerHTML);
}

/* function changePositionUp() {
  let taskSelect = document.querySelector('.li-color').outerHTML;
  const arrayList = taskSelect.previousElementSibling.outerHTML;

  taskSelect = arrayList;
} */

buttonSaveTask.addEventListener('click', saveList);
