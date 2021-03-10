function addItens() {
  const list = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  const input = document.querySelector('#texto-tarefa');
  //input.addEventListener('input', function (e) {
  //input.value = e.target.value;
  //});
  button.addEventListener('click', function add() {
    const item = document.createElement('li');
    item.className = 'to-do-itens';
    list.appendChild(item);
    item.innerText = input.value;
    input.value = ''
  });
};

addItens();

function changeItemColor() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', function (e) {
    let itens = e.target;
    itens.style.backgroundColor = "rgb(128,128,128)";
  });
};

changeItemColor();
