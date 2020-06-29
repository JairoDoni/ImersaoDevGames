class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  setup() {
    cenario = new Cenario(imgCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, 
    fita.configuracoes.vidaInicial);
    personagem = new Personagem(
      matrizPresonagemAnjo,
      imgPersonagem,
      0,
      10,
      200,
      200,
      400,
      400
    );
    const inimigo = new Inimigo(
      matrizInimigo,
      imgInimigo,
      width - 52,
      30,
      140,
      140,
      104,
      104,
      10,
    );
    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imgInimigoVoador,
      width - 52,
      200,
      150,
      150,
      100,
      100,
      10,
    );
    const inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      imgInimigoGrande,
      width,
      0,
      225,
      225,
      400,
      400,
      15,
    );

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  keyPressed(key) {
    if (key === ' ') {
      personagem.pula();
      somPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    
    personagem.exibe();
    personagem.AplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < - inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();
    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0 ) {
        image(imgGameOver, width / 2 - 270, height / 2 - 120);
        noLoop();
        somPulo = null; 
        somAmbiente.stop();
        somGameOver.play();
      }
    }
  }
}
