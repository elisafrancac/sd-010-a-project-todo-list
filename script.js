// Cria uma função que seleciona um elemento da lista 'ol' e pinta o
// Background com a cor 'rgb(128,128,128)'

function selectTask(taskLine) {
  const taskItem = taskLine;
  const taskList = document.getElementsByClassName('tarefa');

  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].style.backgroundColor = '';
  }

  taskItem.style.backgroundColor = 'rgb(128,128,128)';
}

// Cria uma função que adiciona um elemento 'li' ao 'ol', e faz com que o .innerHTML
// Seja o valor do input com a ID 'texto-tarefa'
// v2.0: taskName.value = ''; Define o valor do input como vazio

function createTask() {
  const taskAdd = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  const taskName = document.getElementById('texto-tarefa');

  taskAdd.onclick = () => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskName.value;
    taskItem.className = 'tarefa';
    taskList.appendChild(taskItem);
    taskName.value = '';
    taskItem.onclick = () => selectTask(taskItem);
  };
}

createTask();
