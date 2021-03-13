// Requisito 5 e 6 - Clicando no Botão e adicionando uma nova lista ordenada
function newList() {
  const getTextoTarefa = document.querySelector('#texto-tarefa');
  const getCriarTarefa = document.querySelector('#criar-tarefa');
  const getListaTarefa = document.querySelector('#lista-tarefas');

  getCriarTarefa.addEventListener('click', () => {
    if (getTextoTarefa.value.length > 0) {
      const novaLista = document.createElement('li');
      novaLista.innerText = getTextoTarefa.value;
      novaLista.className = 'item';
      getListaTarefa.appendChild(novaLista);
      getTextoTarefa.value = '';
    }
  });
}
newList();

// Requisito 7
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cdc6f5084c225c6852fcfe3e5acd1ac6269c540f/script.js
function changingBackgroundGreen(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function eventchangeBackgroundGreen() {
  const getIDTarefaLista = document.getElementById('lista-tarefas');
  const getTarefa = getIDTarefaLista;
  getTarefa.addEventListener('click', changingBackgroundGreen);
}

// Requisito 8
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/cdc6f5084c225c6852fcfe3e5acd1ac6269c540f/script.js
function changingBackgroundWhite() {
  const getClassItem = document.getElementsByClassName('item');
  for (let index = 0; index < getClassItem.length; index += 1) {
    if (getClassItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      getClassItem[index].style.backgroundColor = 'white';
    }
  }
}

function eventchangeBackgroundWhite() {
  const getListaTarefa = document.getElementById('lista-tarefas');
  getListaTarefa.addEventListener('click', changingBackgroundWhite);
}
eventchangeBackgroundWhite();
eventchangeBackgroundGreen();

// Requisito 9
// Exercício feito com a ajuda do código Lucas Andrade
// Link: https://github.com/tryber/sd-010-a-project-todo-list/blob/a08087c599642b1c3dbe9e5f048fa6c5c403ff3b/script.js
function setLineTrough(event) {
  const eventTarget = event.target;
  if (eventTarget.className === 'item') {
    eventTarget.className = 'item completed';
  } else {
    eventTarget.className = 'item';
  }
}

function eventSetLineTrough() {
  const getIDListaTarefa = document.getElementById('lista-tarefas');
  getIDListaTarefa.addEventListener('dblclick', setLineTrough);
}

eventSetLineTrough();

// Requisito 10
// http://devfuria.com.br/javascript/dom-remove-child/
function excludingAllList() {
  const lista = document.getElementById('lista-tarefas');
  const itens = lista.getElementsByClassName('item');

  for (let index = 0; index < itens.length; index += 1) {
    lista.removeChild(itens[index]);
  }
}

function eventExcludingAllList() {
  const getApagaTudo = document.getElementById('apaga-tudo');
  getApagaTudo.addEventListener('click',excludingAllList);
}
eventExcludingAllList();