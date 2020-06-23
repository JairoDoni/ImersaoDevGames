let imgCenario;
let imgPersonagem;
let cenario;
let somAmbiente;
let personagem;

function preload(){
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  somAmbiente = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  personagem =  new Personagem(imgPersonagem);
  frameRate(40);
  //somAmbiente.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}
