const input = document.querySelector('#texto-tarefa');
const createAssignment = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const clear = document.querySelector('#remover-finalizados');
const clearAll = document.querySelector('#apaga-tudo');

createAssignment.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value
  todoList.appendChild(li)

  input.value = ''
});

//resolvido com a ajuda da amiga Clarice Oliveira.
todoList.addEventListener('click', (e) => {
  const selectedItem = e.target;
  const liColor = document.querySelectorAll('#lista-tarefas li');
  for (const liC of liColor) {
    liC.classList.remove('gray')
  }
      selectedItem.classList.toggle('gray');
}); 

todoList.addEventListener('dblclick', (e) => {
  const selectedItem = e.target;
  
  selectedItem.classList.add('completed');
}); 

//código feito baseado no code Review do Lucas Pedroso.
clear.addEventListener('click', () => {
  const fineshed = document.querySelectorAll('.completed');
  for (let final of fineshed) {
    final.remove();
  }
});

clearAll.addEventListener('click', () => {
  const allCleaned = document.querySelectorAll('#lista-tarefas li');
  for (let final of allCleaned) {
    final.remove();
  }
});