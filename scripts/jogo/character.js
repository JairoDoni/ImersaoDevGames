class Character extends Animation{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadePulo = 0;
    this.alturaPulo= -52; 
    this.gravidade = 7;
    this.pulos = 0;
    this.invencivel = false;
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

  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }
  estaColidindo(enemy) {
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura);
    // rect(enemy.x, enemy.y, enemy.largura, enemy.altura,);
    
    if(this.invencivel){
      return false;
  }
    const precisao = .4;
    const colisao =  collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      enemy.x,
      enemy.y,
      enemy.largura * precisao,
      enemy.altura * precisao,
    );
    return colisao;
  }
}
