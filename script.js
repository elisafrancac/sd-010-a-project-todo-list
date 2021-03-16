window.onload = function (){

function createButton () {
    let button = document.getElementById('botao');
    let newButton = document.createElement('button');
    newButton.id = 'criar-tarefa';
    newButton.innerHTML = 'Adicionar';
    button.appendChild(newButton);
}
createButton();

// pratica 5, 6, 7 - https://stackoverflow.com/questions/26688323/appending-input-value-to-list-using-javascript-to-do-list
function clickButton (){
    
    let click = document.getElementById('criar-tarefa');
    click.addEventListener('click', function (event){
        let btnClick = event.target;
        let addLi = document.getElementById('lista-tarefas'); //ol
        let li = document.createElement('li');
        let text = document.getElementById('texto-tarefa');
        li.innerHTML = text.value;
        li.addEventListener('click', function (event){
            let evt = event.target;
            let gray = document.querySelector('#gray');
            if (gray){
                gray.removeAttribute('id');
            }
            evt.id = 'gray'; 
        });
        //let liColor = document.getElementsByTagName('li');
        // add evento
        // ferificar se algum tem a cor cinza, se tiver remove e se não tiver adiciona
        text.value = '';
        addLi.appendChild(li);
    })
}
clickButton ();

function lineThrough(){
    let list = document.getElementById('lista-tarefas');
    list.addEventListener('dblclick', function (event){
            let click = event.target;
            click.classList.add('completed');     
     });    
}
lineThrough();






}