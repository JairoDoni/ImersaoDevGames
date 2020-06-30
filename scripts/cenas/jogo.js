class Jogo {
  constructor() {
    this.indice = 0;
    this.map = fita.map;
  }
  setup() {
    scenario = new Scenario(imgScenario, 3);
    points = new Points();
    life = new Life(fita.configuracoes.maxLife, 
    fita.configuracoes.initialLife);
    character = new Character(
      matrixCharacterAngel,
      imgCharacter,
      0,
      10,
      200,
      200,
      400,
      400
    );
    const enemy = new Enemy(
      matrixEnemy,
      imgEnemy,
      width - 52,
      30,
      140,
      140,
      104,
      104,
      10,
    );
    const flyingEnemy = new Enemy(
      matrixFlyingEnemy,
      imgFlyingEnemy,
      width - 52,
      200,
      150,
      150,
      100,
      100,
      10,
    );
    const bigEnemy = new Enemy(
      matrixBigEnemy,
      imgBigEnemy,
      width,
      0,
      225,
      225,
      400,
      400,
      15,
    );

    enemys.push(enemy);
    enemys.push(bigEnemy);
    enemys.push(flyingEnemy);
  }
  keyPressed(key) {
    if (key === ' ') {
      character.pula();
      soundJump.play();
    }
  }

  draw() {
    scenario.exibe();
    scenario.move();
    
    points.exibe();
    points.adicionarPonto();
    
    life.draw();
    character.exibe();
    character.AplicaGravidade();
    
    const linhaAtual = this.map[this.indice];
    const enemy = enemys[linhaAtual.enemy];
    const visibleEnemy = enemy.x < - enemy.largura;

    enemy.velocidade = linhaAtual.velocidade;

    enemy.exibe();
    enemy.move();
    if (visibleEnemy) {
      this.indice++;
      enemy.aparece();
      if (this.indice > this.map.length - 1) {
        this.indice = 0;
      }
    }

    if (character.estaColidindo(enemy)) {
      
      character.tornarInvencivel();
      life.perdeVida();
      if (life.lifes === 0 ) {
        image(imgGameOver, width / 2 - 270, height / 2 - 120);
        noLoop();
        soundJump = null; 
        soundAmbient.stop();
        soundGameOver.play();
      }
    }
  }
}
