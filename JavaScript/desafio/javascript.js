function removerAtraso(){
	setTimeout(function(){alerta();},1000);
}

function removerAtraso2(){
	setTimeout(function(){alerta();},2000);
}

function removerAtraso3(){
	setTimeout(function(){alerta();},5000);
}

function removerAtraso4(){
	setTimeout(function(){alerta();},10000);
}

function removerAtraso5(){
	setTimeout(function(){alerta();},30000);
}

function removerAtraso6(){
	setTimeout(function(){alerta();},60000);
}

function alerta () {
	alert("Tempo Esgotado");
}



function removerAtraso() {
	var temp = Document.getElementById("tempo").value;
	tempo = temp*1000
	setTimeout(function(){alerta();}, tempo);
}

function alerta(){
	alert("tempo esgotado");	
}

