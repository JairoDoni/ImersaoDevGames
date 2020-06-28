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
    
    if (window.matchMedia("(min-width:1000px)").matches) {
      textSize(55);
      text('As aventuras de', width / 2, height / 3);
    } else {
      textSize(35);
      text('As aventuras de', width / 2, height / 3);
    }
    
    if (window.matchMedia("(min-width:1000px)").matches) {
      textSize(150);
      text('Hipsta', width / 2, height / 5 * 3);
    } else {
      textSize(70);
      text('Hipsta', width / 2, height / 5 * 3);
    }
  }

  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
  
}
