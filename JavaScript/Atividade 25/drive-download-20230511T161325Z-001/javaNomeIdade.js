
        function verificarIdade() {
            var nome = document.getElementById('nome').value;
            var idade = parseInt(document.getElementById('idade').value);
            
            
            var mensagem = '';
            if (idade >= 18) {
                mensagem = ' ' + nome + '! você é maior de idade.';
            } else {
                mensagem = ' ' + nome + '! você é menor de idade.';
            }
            
          
            alert(mensagem);
        }