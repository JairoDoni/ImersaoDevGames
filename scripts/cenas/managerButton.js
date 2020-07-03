class ManagerButton{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao =  createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass("botao-tela-inicial");
    // soundMenu.loop();
  }
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  _alteraCena(){
    soundMenu.stop();
    soundButton.play();
    setTimeout(() => {
      this.botao.remove();
      currentScene = 'jogo';
      soundAmbient.loop();
    }, 1000)
  }
}