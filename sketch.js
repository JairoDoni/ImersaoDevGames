let jogo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate (35);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial;
  cenas = {
    telaInicial,
    jogo,
  };
  botaoGerenciador = new BotaoGerenciador('Start', width / 2, height / 2);
}

function keyPressed() {
  
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}