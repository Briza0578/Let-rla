const textareas = document.querySelectorAll('textarea.auto-expand');

textareas.forEach(textarea => {
  function autoExpand() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  textarea.addEventListener('input', autoExpand);
});

// Ajusta todas as textareas quando a página carregar
window.addEventListener('load', () => {
  textareas.forEach(textarea => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
});

var qtdA = 0;
var qtdB = 0;
var qtdC = 0;
var qtdD = 0;
var qtdE = 0;

function contar(select){

  if (select.value == "A") qtdA++;
else if (select.value == "B") qtdB++;
else if (select.value == "C") qtdC++;
else if (select.value == "D") qtdD++;
else if (select.value == "E") qtdE++;
}


function Mostrar() {
  // Resetar os contadores
  qtdA = qtdB = qtdC = qtdD = qtdE = 0;

  const selects = document.querySelectorAll('select');
  selects.forEach(contar);

  document.getElementById("abcde").value =
    "a(" + qtdA + "); b(" + qtdB + "); c(" + qtdC + "); d(" + qtdD + "); e(" + qtdE + ")";

  const resultados = {
    A: {
      qtd: qtdA,
      texto: "Você tem inclinação para áreas de Ciências Exatas ou Tecnologia (ex.: Engenharia, Ciência da Computação, Matemática)."
    },
    B: {
      qtd: qtdB,
      texto: "Você se identifica com Artes ou Comunicação (ex.: Design, Publicidade, Jornalismo, Letras)."
    },
    C: {
      qtd: qtdC,
      texto: "Você tem interesse em Ciências Humanas ou Saúde (ex.: Psicologia, Medicina, Pedagogia, Serviço Social)."
    },
    D: {
      qtd: qtdD,
      texto: "Você se conecta com Ciências Biológicas ou Ambientais (ex.: Biologia, Agronomia, Gestão Ambiental)."
    },
    E: {
      qtd: qtdE,
      texto: "Você tem perfil para Gestão ou Negócios (ex.: Administração, Economia, Direito)."
    }
  };

  // Encontrar o(s) maior(es) valor(es)
  const maiorQtd = Math.max(qtdA, qtdB, qtdC, qtdD, qtdE);
  const empatados = Object.entries(resultados)
    .filter(([_, val]) => val.qtd === maiorQtd)
    .map(([letra, val]) => `${val.texto}`);

  if (empatados.length === 1) {
    document.getElementById("tela").value = `Maioria clara: ${empatados[0]}`;
  } else {
    document.getElementById("tela").value = `Empate entre perfis:\n\n• ${empatados.join("\n\n• ")}`;
  }
}

