class MatrizPersonagem{
  constructor(larguraFrame, alturaFrame, totalColunas, totalLinhas){
    this.larguraFrame = larguraFrame;
    this.alturaFrame = alturaFrame;
    this.totalColunas = totalColunas;
    this.totalLinhas = totalLinhas;
    this.length = this.totalColunas * this.totalColunas;
  }
  
  posicaoX(frameAtual){
    let colunaAtual = parseInt( ( frameAtual % this.totalColunas ), 10);
    let posicaoInicialX = ( colunaAtual * this.larguraFrame );
    return posicaoInicialX;
  }
  
  posicaoY(frameAtual){
    let linhaAtual = parseInt( frameAtual / this.totalLinhas, 10);
    let posicaoInicialY = ( linhaAtual * this.alturaFrame );
    return posicaoInicialY;
  }
}