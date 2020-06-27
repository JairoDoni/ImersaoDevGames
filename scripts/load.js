function preload() {
  imgCenario = loadImage("imagens/cenario/floresta.png");
  imgPersonagem = loadImage("imagens/personagem/correndo2.png");
  imgInimigo = loadImage("imagens/inimigos/gotinha.png");
  imgInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imgInimigoGrande = loadImage("imagens/inimigos/troll.png");
  imgVida = loadImage("imagens/assets/heart.png");
  imgTelaInicial = loadImage("imagens/assets/telaInicial.png");
  imgGameOver = loadImage("imagens/assets/game-over.png");
  
  fontTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");

  somAmbiente = loadSound("../sons/fullmetal_mixagem02.mp3");
  somPulo = loadSound("../sons/somPulo.mp3");
  somGameOver = loadSound("../sons/morteJogoZelda.mp3");
  soundButton = loadSound("../sons/start.mp3");

  fita = loadJSON("../fita/fita.json");
}