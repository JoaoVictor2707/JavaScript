function adicionarCachorro() {
  var cachorroInput = document.getElementById("cachorro");
  var cachorroValor = cachorroInput.value;

  if (cachorroValor !== "") {
    var dogsList = document.getElementById("dogs_list");
    var novoCachorro = document.createElement("li");
    novoCachorro.textContent = cachorroValor;
    dogsList.appendChild(novoCachorro);

    cachorroInput.value = "";
  }
}

function removerCachorro() {
  var cachorroNumero = parseInt(prompt("Digite o número do cachorro que deseja remover:"));
  var dogsList = document.getElementById("dogs_list");
  var cachorros = dogsList.getElementsByTagName("li");

  if (cachorroNumero >= 1 && cachorroNumero <= cachorros.length) {
    dogsList.removeChild(cachorros[cachorroNumero - 1]);
  } else {
    alert("Número de cachorro inválido!");
  }
}

function adicionarGato() {
  var gatoInput = document.getElementById("gato");
  var gatoValor = gatoInput.value;

  if (gatoValor !== "") {
    var catsList = document.getElementById("cats_list");
    var novoGato = document.createElement("li");
    novoGato.textContent = gatoValor;
    catsList.appendChild(novoGato);

    gatoInput.value = "";
  }
}

function removerGato() {
  var gatoNumero = parseInt(prompt("Digite o número do gato que deseja remover:"));
  var catsList = document.getElementById("cats_list");
  var gatos = catsList.getElementsByTagName("li");

  if (gatoNumero >= 1 && gatoNumero <= gatos.length) {
    catsList.removeChild(gatos[gatoNumero - 1]);
  } else {
   
  }
}
function removerAtrasado(){
	setTimeout(function(){removerGato();},4000);
}