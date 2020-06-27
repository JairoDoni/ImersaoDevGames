class Vida {
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 30;
    this.altura = 30;
    this.xInicial = 20;
    this.y = 20;

  }
  draw(){ 
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 12;
      const position = this.xInicial * (i + 1)
      image(imgVida, position + margem, this.y, this.largura, this.altura)
    }
  }

  ganhaVida(){
    if(this.vidas <= this.total){
      this.vidas++;
      
     }
  }
  perdeVida(){
    
    this.vidas--;
  }
}