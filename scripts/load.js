function preload() {
  imgCenario = loadImage("imagens/cenario/castelo01.png");
  imgPersonagem = loadImage("imagens/personagem/anjo.png");
  imgInimigo = loadImage("imagens/inimigos/javali.png");
  imgInimigoVoador = loadImage("imagens/inimigos/bat.png");
  imgInimigoGrande = loadImage("imagens/inimigos/skull.png");
  imgVida = loadImage("imagens/assets/heart.png");
  imgTelaInicial = loadImage("imagens/assets/telaInicial02.png");
  imgGameOver = loadImage("imagens/assets/gameover02.png");
  titleFirstScreen = loadImage("imagens/assets/title.png");
  
  fontTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");

  somAmbiente = loadSound("sons/Grimm.mp3");
  soundLoseLife = loadSound("sons/lose_life.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
  somGameOver = loadSound("sons/morteJogoZelda.mp3");
  soundButton = loadSound("sons/start.mp3");

  fita = loadJSON("fita/fita.json");
}
