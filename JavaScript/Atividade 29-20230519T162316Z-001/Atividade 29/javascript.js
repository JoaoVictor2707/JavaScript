function adicionaTarefa() {
	var tarefaInput = document.getElementById("tarefaInput");
	var listaTarefas = document.getElementById("listaTarefas");

	var novaTarefa = document.createElement("li");
	novaTarefa.innerHTML = tarefaInput.value;

	listaTarefas.appendChild(novaTarefa);

	tarefaInput.value = "";
}

