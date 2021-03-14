function newTask() {
  const createLi = document.createElement('li');
  createLi.className = 'tasks';
  createLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', newTask);

function selectTask(event) {
  const tasks = document.getElementsByClassName('tasks');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.getElementById('lista-tarefas').addEventListener('click', selectTask);

function completeTask(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed");
  } else {
    event.target.classList.add("completed");
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completeTask);

function clearTaskList() {
  let toClear = document.getElementById("lista-tarefas");
  toClear.innerText = "";
}

document.getElementById("apaga-tudo").addEventListener('click', clearTaskList);

function clearCompleted() {
  const completedItens = document.getElementById('lista-tarefas').childNodes;
  for (let index = completedItens.length - 1; index >= 0; index -= 1) {
    if (completedItens[index].classList.contains("completed")) {
      document.getElementById('lista-tarefas').removeChild(completedItens[index]);
    }
  }
}

document.getElementById('remover-finalizados').addEventListener('click', clearCompleted);