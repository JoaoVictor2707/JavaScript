var carro = {
  marca: "",
  modelo: "",
  ano: 0,
  cor: "",
  informacoes: function() {
    console.log("O carro é um " + this.marca + ", modelo " + this.modelo + ", fabricado no ano " + this.ano + ", cor " + this.cor + ".");
  }
};

function imprimirCarro() {
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var ano = document.getElementById("ano").value;
  var cor = document.getElementById("cor").value;
  
  carro.marca = marca;
  carro.modelo = modelo;
  carro.ano = parseInt(ano);
  carro.cor = cor;
  
  carro.informacoes();
  
  document.getElementById("resultado").innerHTML = "O carro descrevido e um " + carro.marca + ", modelo " + carro.modelo + ", fabricado no ano " + carro.ano + ", cor " + carro.cor + ".";
}
	