var carro="";//Declara uma variável chamada `carro` e a inicializa com uma string vazia. //
var vetorCarros = [];//Declara uma variável chamada `vetorCarros` e a inicializa com um array vazio. //
var stringCarros = "";//Declara uma variável chamada `stringCarros` e a inicializa com uma string vazia. //

function preencheObjeto(){//Declara uma função chamada `preencheObjeto`. //
    
    var Marca = document.getElementById("textMarca").value;//Obtém o valor do elemento HTML com o ID "textMarca" e o atribui à variável `Marca`. //
    var Modelo = document.getElementById("txtModelo").value;// Obtém o valor do elemento HTML com o ID "txtModelo" e o atribui à variável `Modelo`.//
    var Ano = parseInt(document.getElementById("txtAno").value);//Obtém o valor do elemento HTML com o ID "txtAno", converte-o para um número inteiro usando `parseInt` e o atribui à variável `Ano`. //
    var Cor = document.getElementById("txtColor").value;// Obtém o valor do elemento HTML com o ID "txtColor" e o atribui à variável `Cor`. //

    carro = ["Marca: " + marca, "Modelo: " + modelo, "Ano: " + Ano,"Cor: " + Color];//Cria um array chamado `carro` com os valores concatenados das variáveis `Marca`, `Modelo`, `Ano` e `Cor`. //
    vetorCarros.push(carro);//Adiciona o array `carro` ao final do array `vetorCarros`. //
    
}//Finaliza a função `preencheObjeto` //

function mostrarCarro(){//Declara uma função chamada `mostrarCarro`. //
	stringCarros = vetorCarros('<br><br>');//Une os elementos do array `vetorCarros` em uma string, separando-os com `<br><br>`, e atribui essa string à variável `stringCarros`.//
   
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");//Obtém o elemento HTML com o ID "lblMostrarCarro" e o atribui à variável `lblMostrarCarro`.//
	
    lblMostrarCarro.innerHTML = stringCarros;// Obtém o elemento HTML com o ID "lblMostrarCarro" e o atribui à variável `lblMostrarCarro`. //

}// Finaliza a função `mostrarCarro`. //

function limpaTxt() {//Declara uma função chamada `limpaTxt`.//
    document.getElementById("txtMarca").value = "";// Define o valor do elemento HTML com o ID "txtMarca" como uma string vazia. //
    document.getElementById("txtModelo").value = "";//Define o valor do elemento HTML com o ID "txtModelo" como uma string vazia. //
    document.getElementById("txtAno").value = "";//Define o valor do elemento HTML com o ID "txtAno" como uma string vazia. //
    document.getElementById("txtColor").value = "";//Define o valor do elemento HTML com o ID "txtColor" como uma string vazia. //
}
