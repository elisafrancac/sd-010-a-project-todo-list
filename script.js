function setTask() {
  const tagLi = document.createElement('li');
  tagLi.className = 'list-item';
  tagLi.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(tagLi);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', setTask);

function clickColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function unsetColor() {
  const items = document.getElementsByClassName('list-item');
  for (let index = 0; index < items.length; index += 1) {
    if (items[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      items[index].style.backgroundColor = 'white';
    }
  }
}

document.getElementById('lista-tarefas').addEventListener('click', unsetColor);
document.getElementById('lista-tarefas').addEventListener('click', clickColor);
