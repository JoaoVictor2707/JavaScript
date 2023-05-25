
        function calcularSoma() {
           
            var listaNumeros = document.getElementById('numeros').value;
            
            
            var numeros = listaNumeros.split(',');
            
           
            var soma = 0;
            for (var i = 0; i < numeros.length; i++) {
                soma += parseInt(numeros[i]);
            }
            
           
            alert('A soma dos números é: ' + soma);
        }
   