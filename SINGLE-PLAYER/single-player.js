const palavras = [
  "girassol",
  "beleza",
  "vida",
  "esperança",
  "natureza",
  "arcoiris",
  "alegria",
  "doce",
  "sorriso",
  "amigo",
  "brinquedo",
  "pipa",
  "bola",
  "cachorro",
  "gato",
  "borboleta",
  "escola",
  "professor",
  "caderno",
  "colorido",
  "abacaxi",
  "melancia",
  "dinossauro",
  "estrela",
  "lua",
  "leão",
  "elefante",
  "macaco",
  "urso",
  "coruja",
  "jacaré",
  "tigre",
  "zebra",
  "girafa",
  "cavalo",
  "coelho",
  "pato",
  "galinha",
  "vaca",
  "ovelha",
  "lobo",
  "canguru",
  "urso polar",
  "foca",
  "golfinho",
  "baleia",
  "pinguim",
  "raposa",
  "tartaruga",
  "peixe",
  "terra",
  "marte",
  "júpiter",
  "saturno",
  "netuno",
  "urano",
  "vênus",
  "mercúrio",
  "sol",
  "galáxia",
  "mickey",
  "minnie",
  "pateta",
  "donald",
  "bobesponja",
  "patrick",
  "dora",
  "boots",
  "peppa",
  "george",
  "ben10",
  "gumball",
  "darwin",
  "finn",
  "jake",
  "elsa",
  "anna",
  "olaf",
  "ralph",
  "moana",
  "simba",
  "nala",
  "buzz",
  "woody",
  "baymax",
  "pirulito",
  "panqueca",
  "balão",
  "giz",
  "caneta",
  "mochila",
  "sorvete",
  "pipoca",
  "suco",
  "hamburguer",
  "nuvem",
  "relógio",
  "óculos",
  "televisão",
  "tablet",
  "celular",
  "computador",
  "carro",
  "ônibus",
  "avião",
  "abelha",
  "pirata",
  "circo",
  "castelo",
  "ninja",
  "robô",
  "superman",
  "batman",
  "homemaranha",
  "aranha",
  "fada",
  "bruxa",
  "dinheiro",
  "tesouro",
  "foguete",
  "astronauta",
  "cometa",
  "estrelinha",
  "chuva",
  "relâmpago",
  "arvore",
  "flor",
  "grama",
  "pedra",
  "rio",
  "lago",
  "oceano",
  "mar",
  "barco",
  "canoa",
  "bicicleta",
  "patins",
  "skate",
  "patinete",
  "bola de gude",
  "amarelinha",
  "bambolê",
  "escorregador",
  "balanço",
  "gangorra",
  "livro",
  "historia",
  "conto",
  "magia",
  "fantasia",
  "monstro",
  "gigante",
  "duende",
  "gnomo",
  "rei",
  "rainha",
  "príncipe",
  "princesa",
  "soldado",
  "capitão",
  "espião",
  "detetive",
  "policial",
  "bombeiro",
  "médico",
  "dentista",
  "enfermeiro",
  "cozinheiro",
  "padeiro",
  "jardineiro",
  "fazendeiro",
  "motorista",
  "piloto",
  "pescador",
  "profissão",
  "pipoca",
  "bolo",
  "balinha",
  "pirulito",
  "pizza",
  "cachorroquente",
  "batata",
  "chocolate",
  "biscoito",
  "queijo",
  "iogurte",
  "morango",
  "banana",
  "laranja",
  "limão",
  "uva",
  "manga",
  "pera",
  "cereja",
  "tomate",
  "cenoura",
  "milho",
  "feijão",
  "arroz",
  "batata doce",
  "brócolis",
  "pepino",
  "alface",
  "repolho",
  "abóbora",
];

const dicas = [
  "Flor amarela que segue o sol",
  "Aquilo que é bonito",
  "Estado de estar vivo",
  "Sentimento positivo sobre o futuro",
  "Tudo ao nosso redor, ecossistemas",
  "Depois da chuva, aparece no céu com muitas cores",
  "Quando estamos felizes, sentimos isso",
  "Guloseima que as crianças adoram",
  "Fazemos isso com a boca quando estamos felizes",
  "Pessoa especial que gostamos muito",
  "Objeto usado para brincar, como bonecas ou carrinhos",
  "Brinquedo que voa com o vento",
  "Usada para jogar futebol ou brincar com amigos",
  "Animal que late e é muito amigo do homem",
  "Animal que mia e gosta de dormir muito",
  "Inseto colorido com asas que voa no jardim",
  "Lugar onde aprendemos e fazemos amigos",
  "Pessoa que ensina na escola",
  "Usado para escrever e fazer tarefas",
  "Algo com muitas cores, como um desenho bonito",
  "Fruta com coroa e sabor tropical",
  "Fruta grande, verde por fora e vermelha por dentro",
  "Animal pré-histórico que as crianças adoram",
  "Brilha no céu à noite e forma constelações",
  "Aparece no céu à noite e pode ser cheia ou nova",
  "Rei da selva com uma grande juba",
  "Maior animal terrestre com uma longa tromba",
  "Animal brincalhão que adora bananas",
  "Animal grande e peludo que gosta de mel",
  "Ave que enxerga no escuro e vive em árvores",
  "Animal com dentes grandes que vive em rios",
  "Animal listrado da família dos felinos",
  "Animal com listras pretas e brancas",
  "Animal de pescoço comprido que vive na savana",
  "Animal que podemos montar e que galopa",
  "Animal fofinho que pula e tem orelhas grandes",
  "Ave que nada na água e faz quac-quac",
  "Ave que bota ovos na fazenda",
  "Animal que dá leite e vive no campo",
  "Animal fofinho que dá lã",
  "Animal parecido com cachorro que uiva",
  "Animal que pula e carrega filhotes na bolsa",
  "Urso branco que vive no gelo",
  "Animal marinho que bate palmas",
  "Animal inteligente que vive no mar",
  "Maior animal do oceano",
  "Animal que vive no frio e não voa",
  "Animal esperto de cauda felpuda",
  "Animal com casco que anda devagar",
  "Animal que vive na água e tem barbatanas",
  "Nosso planeta azul, onde vivemos",
  "Planeta vermelho, vizinho da Terra",
  "Maior planeta do sistema solar",
  "Planeta com anéis brilhantes",
  "Planeta azul distante e frio",
  "Planeta gelado com anéis deitados",
  "Planeta brilhante próximo ao Sol",
  "Planeta mais próximo do Sol",
  "Estrela que ilumina e aquece a Terra",
  "Conjunto gigante de estrelas e planetas",
  "Rato famoso da Disney com luvas brancas",
  "Namorada do Mickey com laço vermelho",
  "Cachorro atrapalhado amigo do Mickey",
  "Pato bravo de camisa azul",
  "Mora num abacaxi no fundo do mar",
  "Melhor amigo da esponja do mar",
  "Garotinha exploradora que fala com o mapa",
  "Macaco amigo da Dora",
  "Porquinha rosa que pula em poças",
  "Irmão da Peppa que ama dinossauros",
  "Menino que vira heróis com um relógio",
  "Gato azul em aventuras engraçadas",
  "Peixinho laranja amigo do Gumball",
  "Menino aventureiro do Hora de Aventura",
  "Cachorro amarelo elástico amigo do Finn",
  "Rainha do gelo que canta 'Let it Go'",
  "Irmã da Elsa, sempre corajosa",
  "Boneco de neve que adora abraços",
  "Vilão de videogame que vira herói",
  "Garota do mar corajosa e destemida",
  "Leãozinho herdeiro do reino",
  "Leoa amiga do Simba",
  "Herói espacial amigo do Woody",
  "Caubói brinquedo líder do grupo",
  "Robô fofinho que cuida da saúde",
  "Doce redondo no palito",
  "Comida redonda que pode ter mel",
  "Objeto cheio de ar usado em festas",
  "Usado para desenhar no quadro ou no chão",
  "Escreve com tinta",
  "Serve para carregar os materiais escolares",
  "Doce gelado, ótimo no calor",
  "Comida estourada usada no cinema",
  "Bebida feita com frutas",
  "Sanduíche com carne e pão",
  "Algodão no céu",
  "Mostra as horas",
  "Usado para enxergar melhor",
  "Onde assistimos desenhos",
  "Usado para jogar e estudar",
  "Dispositivo para ligações e apps",
  "Máquina usada para jogar ou trabalhar",
  "Veículo com quatro rodas",
  "Veículo grande que leva muitas pessoas",
  "Meio de transporte que voa",
  "Inseto que faz mel e adora flores",
  "Navegador dos mares com tapa-olho",
  "Lugar com palhaços, mágicos e diversão",
  "Construção com torres de princesas",
  "Guerreiro silencioso do Japão",
  "Máquina inteligente feita de metal",
  "Herói que voa com capa vermelha",
  "Homem com máscara de morcego",
  "Herói que lança teias",
  "Pequeno animal de oito patas",
  "Criatura mágica que realiza desejos",
  "Mulher com chapéu pontudo e vassoura",
  "Usado para comprar coisas",
  "Caixa cheia de moedas escondida",
  "Veículo que vai ao espaço",
  "Pessoa que viaja para o espaço",
  "Corpo celeste que brilha e viaja rápido",
  "Estrelinha pequena no céu",
  "Água que cai do céu",
  "Luz forte no céu durante tempestades",
  "Planta grande com tronco",
  "Planta bonita com pétalas",
  "Tapete verde no chão",
  "Pedra pequena ou grande",
  "Água que corre entre pedras",
  "Lugar com água parada",
  "Grande corpo de água salgada",
  "Parte do oceano",
  "Embarcação que flutua",
  "Barquinho pequeno com remo",
  "Veículo com duas rodas",
  "Sapato com rodinhas",
  "Plataforma com rodinhas",
  "Veículo infantil com guidão",
  "Bolinha usada para brincar",
  "Jogo de desenhar no chão",
  "Aro redondo para girar na cintura",
  "Brinquedo que escorrega",
  "Brinquedo que balança pra frente e pra trás",
  "Brinquedo que sobe e desce",
  "Tem capa dura e páginas",
  "Narrativa com começo, meio e fim",
  "Tipo de história curta",
  "Truque ou encanto misterioso",
  "Mundo imaginário cheio de maravilhas",
  "Ser assustador das histórias",
  "Ser muito grande e forte",
  "Criatura pequena com orelhas pontudas",
  "Ser mágico que vive na floresta",
  "Comanda o reino",
  "Esposa do rei",
  "Filho do rei",
  "Filha do rei",
  "Guarda do castelo",
  "Líder de um navio ou tropa",
  "Pessoa que investiga disfarçada",
  "Pessoa que desvenda mistérios",
  "Cuida da segurança nas ruas",
  "Apaga incêndios com mangueira",
  "Cuida da nossa saúde",
  "Cuida dos dentes",
  "Ajuda os médicos nos hospitais",
  "Prepara comidas deliciosas",
  "Faz pães na padaria",
  "Cuida das plantas",
  "Cuida dos animais e plantações",
  "Dirige carros ou ônibus",
  "Comanda aviões no céu",
  "Pega peixes no rio ou mar",
  "Nome genérico para trabalho de gente grande",
  "Milho estourado com manteiga",
  "Doce de aniversário com velas",
  "Docinho pequeno com papel colorido",
  "Doce no palito com várias cores",
  "Comida redonda com queijo",
  "Sanduíche quente com salsicha",
  "Batata cortada e frita",
  "Doce marrom que derrete na boca",
  "Biscoito crocante com recheio",
  "Laticínio salgado, amarelo ou branco",
  "Leite fermentado com frutas",
  "Fruta vermelha com pontinhos",
  "Fruta amarela de macaco",
  "Fruta cítrica que dá suco",
  "Fruta azeda e amarela",
  "Fruta pequena roxa ou verde",
  "Fruta amarela, doce e suculenta",
  "Fruta verde com formato diferente",
  "Fruta pequena e vermelha, vai em bolos",
  "Fruta vermelha usada em salada",
  "Raiz laranja dos coelhos",
  "Grão amarelo da espiga",
  "Grãozinho nutritivo da cozinha",
  "Acompanhamento branco para feijão",
  "Tubérculo adocicado",
  "Vegetal verde em forma de arvorezinha",
  "Vegetal verde e crocante",
  "Folha verde das saladas",
  "Folha redonda usada na salada",
  "Vegetal grande e laranja, do Halloween",
];

const flower = document.getElementById("flower");
const hint = document.getElementById("hint");
const hiddenWord = document.getElementById("hidden-word");
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const turno = document.getElementById("turno");

const player1CorrectSpan = document.getElementById("player1-correct");
const player1WrongSpan = document.getElementById("player1-wrong");

const playerSelectDiv = document.getElementById("player-select");
const gameContainer = document.getElementById("game-container");

const virtualKeyboard = document.getElementById("virtual-keyboard");

let palavra = "";
let dica = "";
let letrasReveladas = [];
let tentativasErradas = 0;
let petalas = [];
let jogoAtivo = false;

let playerStats = {
  correct: 0,
  wrong: 0,
};

const letrasTeclado = "abcdefghijklmnopqrstuvwxyzçáéíóúàãõâêîôû".split("");
const backButton = document.getElementById("back-button");

backButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.getElementById("reset-button").addEventListener("click", () => {
  iniciarJogo();
});

function atualizarPainel() {
  player1CorrectSpan.textContent = playerStats.correct;
  player1WrongSpan.textContent = playerStats.wrong;
}

function iniciarJogo() {
  flower.innerHTML = `<div class="center"></div>`;
  message.textContent = "";
  message.style.color = "initial";
  guessInput.disabled = true;
  guessInput.value = "";
  tentativasErradas = 0;
  jogoAtivo = true;

  playerStats = {
    correct: 0,
    wrong: 0,
  };
  atualizarPainel();
  atualizarTurno();

  const index = Math.floor(Math.random() * palavras.length);
  palavra = palavras[index].toLowerCase();
  dica = dicas[index];
  letrasReveladas = Array(palavra.length).fill("_");
  petalas = [];

  hint.innerHTML = `<strong style="font-size: 35px;">Dica:</strong> <i>${dica}</i>`;
  atualizarPalavra();
  criarPetalas(palavra.length);

  criarTecladoVirtual();
}

function atualizarPalavra() {
  hiddenWord.textContent = letrasReveladas.join(" ");
}

function atualizarTurno() {
  turno.textContent = `Sua vez, jogue:`;
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

function criarTecladoVirtual() {
  if (!virtualKeyboard) return;

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

function processarChute(letra) {
  if (!jogoAtivo) return;
  if (!letra.match(/[a-zçáéíóúàãõâêîôû]/i)) return;

  if (palavra.includes(letra)) {
    let acertou = false;

    palavra.split("").forEach((char, i) => {
      if (char === letra && letrasReveladas[i] === "_") {
        letrasReveladas[i] = letra;
        acertou = true;
        playerStats.correct++;
      }
    });

    atualizarPalavra();
    message.textContent = "";
    atualizarPainel();

    if (!letrasReveladas.includes("_")) {
      fimDeJogo(`🎉 Você venceu!`, "white");
    }
  } else {
    if (petalas.length > 0) {
      const ultimaPetala = petalas.pop();
      flower.removeChild(ultimaPetala);
      tentativasErradas++;

      playerStats.wrong++;
      atualizarPainel();

      const restantes = petalas.length;

      atualizarTurno();

      message.style.color = "black";
      message.textContent = `❌ Você errou!\nRestam ${restantes} pétalas.`;

      if (restantes === 0) {
        atualizarPalavra();
        fimDeJogo(`💀 Fim de jogo!\nA palavra era: ${palavra}`, "black");
      }
    }
  }
}

function fimDeJogo(mensagem, cor) {
  jogoAtivo = false;
  message.style.color = cor;
  message.textContent = mensagem;
  guessInput.disabled = true;

  if (cor === "black") {
    chuvaDeGirassoisTristes(50);
  } else {
    chuvaDeGirassoisFelizes(50);
  }

  setTimeout(() => {
    iniciarJogo();
  }, 7000);
}

function criarGirassolTriste() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling-sunflower");
  emoji.textContent = "🌻😢";
  emoji.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 4000);
}

function chuvaDeGirassoisTristes(qtd = 50) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(criarGirassolTriste, i * 80);
  }
}

function criarGirassolFeliz() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling-sunflower");

  const emojisFelizes = ["🌻😊", "🌞🌼", "😄🌻", "🌻🎉", "🌼😁", "🌞😃"];
  emoji.textContent =
    emojisFelizes[Math.floor(Math.random() * emojisFelizes.length)];

  emoji.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 4000);
}

function chuvaDeGirassoisFelizes(qtd = 50) {
  for (let i = 0; i < qtd; i++) {
    setTimeout(criarGirassolFeliz, i * 80);
  }
}

const onePlayer = document.getElementById("one-player");

iniciarJogo();
