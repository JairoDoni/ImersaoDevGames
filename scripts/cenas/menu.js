class Menu {
  constructor(){}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  _imagemDeFundo(){
    image(imgMenu, 0, 0, width, height);
  }

  _texto(){
    image(titleFirstScreen, width / 2 - 200, height / 7 * 1.5);
  }

  _botao(){
    managerButton.y = height / 7 * 5;
    managerButton.draw();
  }
}
