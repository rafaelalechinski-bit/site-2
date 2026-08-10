// 1. Funcionalidade do Portal de Escuta
const formEscuta = document.getElementById('form-escuta');
const respostaAcolhimento = document.getElementById('resposta-acolhimento');

formEscuta.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio real do formulário
  
  // Mensagem automática de acolhimento
  respostaAcolhimento.innerHTML = `
    <p><strong>Obrigado por compartilhar.</strong></p>
    <p>Seus sentimentos são válidos. Lembre-se de que você não precisa carregar tudo sozinho(a). Procurar ajuda é um ato de coragem.</p>
  `;
  
  respostaAcolhimento.classList.remove('hidden');
  formEscuta.reset(); // Limpa o campo de texto
});

// 2. Funcionalidade do Quiz Interativo (5 Perguntas)
const perguntasQuiz = [
  {
    pergunta: "1. Repassar imagens ou vídeos constrangedores de um colega na internet é considerado:",
    opcoes: ["Apenas uma brincadeira inofensiva", "Cyberbullying", "Liberdade de expressão"],
    correta: 1
  },
  {
    pergunta: "2. O que você deve fazer se presenciar uma situação de preconceito na escola?",
    opcoes: ["Ficar em silêncio", "Incentivar a atitude", "Apoiá-lo e avisar um responsável ou professor"],
    correta: 2
  },
  {
    pergunta: "3. Qual destas opções representa uma senha segura para proteger seus dados?",
    opcoes: ["123456", "NomeDele123#2026", "data_de_nascimento"],
    correta: 1
  },
  {
    pergunta: "4. Respeitar as diferenças de opiniões e identidades na escola ajuda a:",
    opcoes: ["Criar um ambiente acolhedor e seguro", "Gerar mais conflitos", "Diminuir o aprendizado"],
    correta: 0
  },
  {
    pergunta: "5. Se você estiver se sentindo sobrecarregado ou triste com frequência, o melhor a fazer é:",
    opcoes: ["Guardar tudo para si", "Conversar com alguém de confiança ou buscar ajuda profissional", "Ignorar o sentimento"],
    correta: 1
  }
];

function carregarQuiz() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  perguntasQuiz.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('quiz-item');
    
    let htmlOpcoes = '';
    q.opcoes.forEach((opcao, iOpcao) => {
      htmlOpcoes += `
        <label>
          <input type="radio" name="pergunta${index}" value="${iOpcao}">
          ${opcao}
        </label>
      `;
    });

    div.innerHTML = `<p><strong>${q.pergunta}</strong></p><div class="quiz-options">${htmlOpcoes}</div>`;
    container.appendChild(div);
  });
}

document.getElementById('btn-submit-quiz').addEventListener('click', function() {
  let pontos = 0;

  perguntasQuiz.forEach((q, index) => {
    const selecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
    if (selecionada && parseInt(selecionada.value) === q.correta) {
      pontos++;
    }
  });

  const resultado = document.getElementById('resultado-quiz');
  resultado.innerText = `Você acertou ${pontos} de ${perguntasQuiz.length} perguntas!`;
});

// 3. Botão de Alto Contraste (Diferencial)
const btnContrast = document.getElementById('toggle-contrast');
btnContrast.addEventListener('click', () => {
  document.body.classList.toggle('contrast-mode');
});

// Inicializa o quiz ao carregar a página
carregarQuiz();