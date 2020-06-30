function preload() {
  imgScenario = loadImage("imagens/cenario/castelo01.png");
  imgCharacter = loadImage("imagens/personagem/anjo.png");
  imgEnemy = loadImage("imagens/inimigos/javali.png");
  imgFlyingEnemy = loadImage("imagens/inimigos/bat.png");
  imgBigEnemy = loadImage("imagens/inimigos/skull.png");
  imgLife = loadImage("imagens/assets/heart.png");
  imgMenu = loadImage("imagens/assets/telaInicial02.png");
  imgGameOver = loadImage("imagens/assets/gameover02.png");
  titleFirstScreen = loadImage("imagens/assets/title.png");

  soundMenu = loadSound("sons/castlevania.mp3");
  soundAmbient = loadSound("sons/Grimm.mp3");
  soundButton = loadSound("sons/start.mp3");
  soundJump = loadSound("sons/somPulo.mp3");
  soundLoseLife = loadSound("sons/lose_life.mp3");
  soundGameOver = loadSound("sons/morteJogoZelda.mp3");

  fontMenu = loadFont("imagens/assets/fonteTelaInicial.otf");

  fita = loadJSON("fita/fita.json");
}
