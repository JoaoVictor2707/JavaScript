function calculaIMC(){
	peso = document.getElementById("campoPeso").value;
	peso = parseFloat(peso);
	altura = document.getElementById("campoAltura").value;
	altura = parseFloat(altura);
	
	resultIMC = (peso / (altura * altura))*10000;
	
	var labelResult = document.getElementById("labelIMC");
	labelResult.innerHTML = "o IMC é:" + resultIMC;
}

function converteEmCentimetros(){
	valorEmMetros = document.getElementById("campoMetros").value;
	valorEmMetros = parseFloat(valorEmMetros);
	
	valorConvertido = valorEmMetros * 100;
	
	var labelCentimetros = document.getElementById("labelConverter");
	labelCentimetros.innerHTML = valorConvertido + "centimetros"
}
function soma() {
	num1 = parseFloat(document.getElementById("valor01").value);
	num2 = parseFloat(document.getElementById("valor02").value);
	resultadoSoma = num1 + num2;
	var labelSoma = document.getElementById("labelCalculadora");
	labelSoma.innerHTML = "soma = " + resultadoSoma;
}

function subtracao() {
	num1 = parseFloat(document.getElementById("valor01").value);
	num2 = parseFloat(document.getElementById("valor02").value);
	resultadoSubtracao = num1 - num2;
	var labelSubtracao = document.getElementById("labelCalculadora");
	labelSubtracao.innerHTML = "subtração = " + resultadoSubtracao;
}

function multiplicacao () {
	num1 = parseFloat(document.getElementById("valor01").value);
	num2 = parseFloat(document.getElementById("valor02").value);
	resultadoMultiplicacao = num1 * num2;
	var labelMultiplicacao = document.getElementById("labelCalculadora");
	labelMultiplicacao.innerHTML = "multiplicação = " + resultadoMultiplicacao;
}


function divisao () {
	num1 = parseFloat(document.getElementById("valor01").value);
	num2 = parseFloat(document.getElementById("valor02").value);
	resultadoDivisao = num1 / num2;
	var labelDivisao = document.getElementById("labelCalculadora");
	labelDivisao.innerHTML = "divisão = " + resultadoDivisao;
}


function converteData () {
	stringCompleta = document.getElementById("campoData").value;
	arrayData = stringCompleta.split("/");
	var labelData = document.getElementById("labelData");
	labelData.innerHTML = arrayData[1] + '/' + arrayData[0] + '/' + arrayData[2];
}



