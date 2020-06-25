class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadePulo = 0;
    this.alturaPulo= -52; 
    this.gravidade = 6;
    this.pulos = 0;

  }
  pula() {
    if(this.pulos < 2){
      this.velocidadePulo = this.alturaPulo;
      this.pulos++;

    }
  }
  AplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    //  noFill();
    //  rect(this.x, this.y, this.largura, this.altura);
    //  rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura,);
    const precisao = .7;
    const colisao =  collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao,
    );
    return colisao;
  }
}
