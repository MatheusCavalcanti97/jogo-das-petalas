const player1Name = localStorage.getItem("player1") || "Jogador 1";
const player2Name = localStorage.getItem("player2") || "Jogador 2";

let currentPlayer = 1;
let palavra = "";
let dica = "";
let letrasReveladas = [];
let tentativasErradas = 0;
let petalas = [];
let jogoAtivo = false;

window.addEventListener("DOMContentLoaded", () => {
  const formNomes = document.getElementById("form-nomes");
  const telaNomes = document.getElementById("tela-nomes");
  const telaPalavra = document.getElementById("tela-palavra");

  formNomes.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome1 = document.getElementById("player1").value.trim();
    const nome2 = document.getElementById("player2").value.trim();

    if (nome1 && nome2) {
      localStorage.setItem("player1", nome1);
      localStorage.setItem("player2", nome2);

      telaNomes.classList.remove("ativa");
      telaPalavra.classList.add("ativa");
    } else {
      alert("Preencha os dois nomes!");
    }
  });

  const formPalavra = document.getElementById("form-palavra");
  const telaJogo = document.getElementById("tela-jogo");

  formPalavra.addEventListener("submit", (e) => {
    e.preventDefault();

    const palavra = document.getElementById("palavra").value.trim();
    const dica = document.getElementById("dica").value.trim();

    if (palavra && dica) {
      telaPalavra.classList.remove("ativa");
      telaJogo.classList.add("ativa");
      iniciarJogo2Jogadores(palavra, dica);
    }
  });
});

const flower = document.getElementById("flower");
const hint = document.getElementById("hint");
const hiddenWord = document.getElementById("hidden-word");
const message = document.getElementById("message");
const turno = document.getElementById("turno");
const virtualKeyboard = document.getElementById("virtual-keyboard");

const player1CorrectSpan = document.getElementById("player1-correct");
const player1WrongSpan = document.getElementById("player1-wrong");
const player2CorrectSpan = document.getElementById("player2-correct");
const player2WrongSpan = document.getElementById("player2-wrong");

const letrasTeclado = "abcdefghijklmnopqrstuvwxyzçáéíóúàãõâêîôû".split("");

const playerStats = {
  1: { correct: 0, wrong: 0 },
  2: { correct: 0, wrong: 0 },
};

function iniciarJogo2Jogadores(palavraInput, dicaInput) {
  palavra = palavraInput.toLowerCase();
  dica = dicaInput;
  letrasReveladas = Array(palavra.length).fill("_");
  tentativasErradas = 0;
  jogoAtivo = true;
  currentPlayer = 1;
  flower.innerHTML = `<div class="center"></div>`;

  hint.textContent = `Dica: ${dica}`;
  atualizarPalavra();
  criarPetalas(palavra.length);
  atualizarPainel();
  atualizarTurno();
  criarTecladoVirtual();
}

function atualizarPainel() {
  player1CorrectSpan.textContent = playerStats[1].correct;
  player1WrongSpan.textContent = playerStats[1].wrong;
  player2CorrectSpan.textContent = playerStats[2].correct;
  player2WrongSpan.textContent = playerStats[2].wrong;
}

function atualizarTurno() {
  turno.textContent = `Vez de: ${
    currentPlayer === 1 ? player1Name : player2Name
  }`;
}

function criarPetalas(qtd) {
  flower.innerHTML = `<div class="center"></div>`;
  petalas = [];
  for (let i = 0; i < qtd; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    const angle = (360 / qtd) * i;
    petal.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    flower.appendChild(petal);
    petalas.push(petal);
  }
}

function atualizarPalavra() {
  hiddenWord.textContent = letrasReveladas.join(" ");
}

function criarTecladoVirtual() {
  virtualKeyboard.innerHTML = "";
  letrasTeclado.forEach((letra) => {
    const tecla = document.createElement("button");
    tecla.classList.add("key");
    tecla.textContent = letra.toUpperCase();
    tecla.addEventListener("click", () => {
      if (!jogoAtivo) return;
      processarChute(letra);
      tecla.disabled = true;
      tecla.classList.add("disabled");
    });
    virtualKeyboard.appendChild(tecla);
  });
}

function alternarJogador() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  atualizarTurno();
}

function processarChute(letra) {
  if (!jogoAtivo || !letra.match(/[a-zçáéíóúàãõâêîôû]/i)) return;

  if (palavra.includes(letra)) {
    let acertou = false;
    palavra.split("").forEach((char, i) => {
      if (char === letra && letrasReveladas[i] === "_") {
        letrasReveladas[i] = letra;
        acertou = true;
        playerStats[currentPlayer].correct++;
      }
    });
    atualizarPalavra();
    atualizarPainel();
    if (!letrasReveladas.includes("_"))
      fimDeJogo(
        `🎉 ${currentPlayer === 1 ? player1Name : player2Name} venceu!`,
        "white"
      );
  } else {
    if (petalas.length > 0) {
      const ultimaPetala = petalas.pop();
      flower.removeChild(ultimaPetala);
      tentativasErradas++;
      playerStats[currentPlayer].wrong++;
      atualizarPainel();
      if (petalas.length === 0)
        fimDeJogo(`💀 Fim de jogo! A palavra era: ${palavra}`, "black");
    }
    alternarJogador();
  }
}

function fimDeJogo(mensagem, cor) {
  jogoAtivo = false;
  message.style.color = cor;
  message.textContent = mensagem;
  setTimeout(() => location.reload(), 7000);
}
