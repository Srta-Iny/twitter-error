//realizar funcion que guarde las tareas indicadas en el caja mensajes
// crear var para recorrer DOM
// crear var para guardar respuesta
//hay que confirmar si hay informacion en la caja de mansajes
//guardar tarea y asignar un checkbox para dicha tarea
var tarea = [];
var textMensaje =document.getElementById("mensaje");
var 
function submit(){
	var enviar = document.getElementById("form-submit");
	enviar.addEventListener("click", nuevaTarea);
}
function añadirTarea(){
	//existe texto?
	if(textMensaje.value === ""){
		return false;
	}
	
}