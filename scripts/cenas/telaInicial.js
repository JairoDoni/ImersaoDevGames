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
    textFont(fontTelaInicial);
    textAlign(CENTER);
    textSize(55);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hipsta', width / 2, height / 5 * 3);
  }

  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
  
}