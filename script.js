const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const inputTexto = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');

botaoCriaTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
  if (inputTexto.value !== '') {
    const lista = document.createElement('li');
    lista.innerText = inputTexto.value;
    inputTexto.value = '';
    listaDeTarefas.appendChild(lista);
  }
}

listaDeTarefas.addEventListener('click', trocaCor);

function trocaCor(event) {
  const elementoClicado = document.querySelectorAll('li');
  for (let index = 0; index < elementoClicado.length; index += 1) {
    elementoClicado[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listaDeTarefas.addEventListener('dblclick', clickDuplo);

function clickDuplo(event) {
  event.target.classList.toggle('completed');
}

botaoApagaTudo.addEventListener('click', apagaTudo);

function apagaTudo() {
  const apagaElemento = document.querySelectorAll('li');
  for (let index = 0; index < apagaElemento.length; index += 1) {
    listaDeTarefas.removeChild(apagaElemento[index]);
  }
}
