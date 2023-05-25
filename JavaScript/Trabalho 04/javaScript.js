var rules = [
  "Regra 1: Os usuários e a equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo.",
  "Regra 2: NÉ proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratórios.",
  "Regra 3: O ambiente deve preservar o estado de limpeza e organização de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula.",
  "Regra 4: Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional.",
  "Regra 5: É proibido acessar páginas da Internet que possam ser consideradas ilegais ou ofensivas à moral pessoal ou coletiva. Por exemplo, páginas de relacionamentos, pornográficas, de caráter racista, discriminatórias ou que incitem a violência.",
  "Regra 6: Não é permitido usar indevidamente os recursos disponíveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos não pertinentes a aula. No caso de jogos só serão permitidos aqueles que foram designados pelo instrutor com o objetivo didático-pedagógico.",
  "Regra 7: Não é permitido utilizar recursos de comunicação instantânea (MSN, salas de bate-papo, googletalk, whatsapp, telegram, entre outros similares) que não estejam previstos em atividades didático-pedagógicas;",
  "Regra 8: É proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia às atividades didático-pedagógicas como também exercer atividades não relacionadas com o uso específico deste Laboratório;",
  "Regra 9: Não é permitido trocar cabos ou equipamentos periféricos e/ou acessórios (teclados, mouses, etc.) Caso algum equipamento apresente defeito ou não ligue, informar o instrutor para que esse comunique a área de TI responsável por manutenções.",
  "Regra 10: É proibida a instalação de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorização da Supervisão Técnica da Unidade",
  "Regra 11: Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal. Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuário. Portanto, evite deixar arquivos importantes. Não é permitido utilizar pendrive e outros dispositivos similares.",
  "Regra 12: Proibido desenvolver e/ou disseminar vírus nos equipamentos dos Laboratórios de Informática;",
  "Regra 13: É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software);",
  "Regra 14: Desmontar qualquer equipamento ou acessório dos Laboratórios de Informática, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que não esteja previsto em atividades didático-pedagógicas",
];

var currentIndex = 0;

function changeRules() {
  var rulesText = document.getElementById("rules-text");
  
  if (currentIndex >= rules.length) {
    currentIndex = 0;
  }
  
  rulesText.textContent = rules[currentIndex];
  currentIndex++;
}

var changeRulesBtn = document.getElementById("change-rules-btn");


