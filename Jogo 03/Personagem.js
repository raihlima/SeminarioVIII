function Personagem(cor){
  this.x = 30;
  this.y = 30;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  //Seleção de color
  if(cor==0){
    this.color = "lime";
  } else if(cor==1){
    this.color = "wheat";
  } else {
    this.color = "Teal";
  }
}


Personagem.prototype.resetar = function () {
  this.x = 10;
  this.y = 30;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
};

Personagem.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
};


Personagem.prototype.atualizar = function (dt) {
  this.vy = this.vy + (gravidade + this.ay+10) * dt;
  this.y = this.y + this.vy * dt;

  if(this.y<30){
    this.y=30;
    this.vy=0;
  }
  if(this.y>500){
    this.vida-=1
    this.resetar();
  }
};

Personagem.prototype.colisao =function (base){

  if(((this.x>base.x)&&(this.x<base.x+base.width))||((this.x+this.width>base.x)&&(this.x+this.width<base.x+base.width))){

    if(((this.y>base.y)&&(this.y<base.y+base.height))||((this.y+this.height>base.y)&&(this.y+this.height<base.y+base.height))){
      this.vx=0;
      this.y=base.y-30;
      return true;
    }
  }
  if(((this.y>base.y)&&(this.y<base.y+base.height))||((this.y+this.height>base.y)&&(this.y+this.height<base.y+base.height))){

  }
}
