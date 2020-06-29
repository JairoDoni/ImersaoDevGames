let imgCenario;
let imgPersonagem;
let imgInimigo;
let imgInimigoGrande;
let imgInimigoVoador;
let imgVida;
let imgTelaInicial;
let titleFirstScreen;
let fontTelaInicial;
let imgGameOver;
let somGameOver;
let somPulo;
let soundButton;
let soundLoseLife;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;
let vida;
let mapa = [];
let fita;

let cenario;
let somAmbiente;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;


const matrizPresonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];
const matrizPresonagemAnjo = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
  [1200, 2000],
];
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 100],
  [105, 100],
  [210, 100],
  [315, 100],
];
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
  [1200, 2000],
];
const matrizInimigoVoador = [
  [0, 0],
  [115, 0],
  [230, 0],
  [345, 0],
  [0, 100],
  [115, 100],
  [230, 100],
  [345, 100],
];
const inimigos = [];
