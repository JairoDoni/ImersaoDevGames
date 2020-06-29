class TelaInicial {
  constructor(){}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  _imagemDeFundo(){
    image(imgTelaInicial, 0, 0, width, height);
  }

  _texto(){
    
    image(titleFirstScreen, width / 2 - 206, height / 7 * 2);
 
  }

  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
  
}
