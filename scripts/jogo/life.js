class Life {
  constructor(total, initial
){
    this.total = total;
    this.initial= initial;
    this.lifes = this.initial
;

    this.largura = 30;
    this.altura = 30;
    this.xinitial = 20;
    this.y = 20;

  }
  draw(){ 
    for(let i = 0; i < this.lifes; i++){
      const margem = i * 12;
      const position = this.xinitial * (i + 1);
      image(imgLife, position + margem, this.y, this.largura, this.altura)
    }
  }

  ganhaVida(){
    if(this.lifes <= this.total){
      this.lifes++;
     }
  }
  perdeVida(){
    this.lifes--;
    soundLoseLife.play();
  }
}