function overwriteText(event) {
  const { target } = event;
  // Verificando se já tenho a classe dentro dos elementos da lista:  https://pt.stackoverflow.com/questions/9605/detectar-se-um-elemento-cont%C3%A9m-uma-classe-com-javascript-puro
  if ((target.classList.contains('completed')) === true) {
    // Removendo a classe do elemento: https://www.w3schools.com/howto/howto_js_remove_class.asp
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
}

function changesColor(event) {
  const { target } = event;
  const listItems = document.getElementsByTagName('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].style.backgroundColor = 'white';
  }
  target.style.backgroundColor = 'rgb(128,128,128)';
}

function receiveClick() {
  const listItem = document.createElement('li');
  const textElement = document.getElementById('texto-tarefa').value;

  listItem.addEventListener('click', changesColor);

  // Criando um evento com 2 clicks para os itens adicionados na lista: https://www.w3schools.com/jsref/event_ondblclick.asp
  listItem.addEventListener('dblclick', overwriteText);

  // Colocando o item da lista dentro do ol e adicionando o texto capturado no input dentro do li: https://www.w3schools.com/jsref/met_document_createtextnode.asp
  document.getElementById('lista-tarefas').appendChild(listItem);
  listItem.appendChild(document.createTextNode(textElement));

  document.getElementById('texto-tarefa').value = '';
}

const buttonAddToDo = document.getElementById('criar-tarefa');
buttonAddToDo.addEventListener('click', receiveClick);
