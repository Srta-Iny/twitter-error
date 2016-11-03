window.addEventListener("load", init);
 
var todos = [];
 
function init()
{
	var add = document.querySelector("#form-submit");
	add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
	//prevenimos el evento del enlace
	event.preventDefault();
	//comprobamos que tenga texto
	if(document.querySelector("#mensaje").value === "") return;
 
	//creamos el objeto con la información del li
	var li = 
	{
		index: todos.length + 1,
		value: document.querySelector("#mensaje").value
	};
	todos.push(li);
	displayTodos(li);
}
 
function displayTodos(li)
{
	//creamos el elemento li
    var node = document.createElement("li"); 
    node.id = "mensaje"+li.index;
 
    //creamos el contenido del elementi li
	var textnode = document.createTextNode(li.value);    
	node.appendChild(textnode);   
	document.querySelector("#tareas").appendChild(node); 
	document.querySelector("#mensaje").value = "";
 
	//añadimos el botón
	var deleteButton = createButton(li);
    node.appendChild(deleteButton);
}
 
function createButton(li)
{
	//creamos un input
	var todo = document.createElement("input");
	//de tipo button
    todo.type = "button";
    //añadimos un margen
    todo.style.marginTop = "12px";
    //flotamos a la derecha
    todo.style.float = "right";
    //el texto del input
    todo.value = "Eliminar";
    //añadimos un margen
    todo.style.marginLeft = "15px";
    //añadimos varias clases
    todo.classList.add("removeTodo", "btn", "btn-danger");
    //añadimos el evento click para que sea eliminado
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#mensaje'+li.index);
		toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    return todo;
}