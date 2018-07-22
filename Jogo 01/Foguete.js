function Foguete(cor){
  this.x = Math.floor(Math.random() * 700);
  this.y = -8900;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.combustivel = 100;
  this.vida=3;
  //Seleção de color
  if(cor==0){
    this.color = "green";
  } else if(cor==1){
    this.color = "wheat";
  } else {
    this.color = "Teal";
  }
}

Foguete.prototype.getVida = function () {
  return this.vida;
};

Foguete.prototype.getCombustivel = function () {
  return this.combustivel;
};

Foguete.prototype.getVy = function () {
  return this.vy;
};

Foguete.prototype.resetar = function () {
  this.x = Math.floor(Math.random() * 700);
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.combustivel = 100;
};

Foguete.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
};


Foguete.prototype.atualizar = function (dt) {
  this.vy = this.vy + (gravidade + this.ay+10) * dt;
  this.y = this.y + this.vy * dt;

  this.vx = this.vx + (vento + this.ax)*dt;
  if(this.x<0){
    this.x=0;
    this.vx=0;
  } else if(this.x>669){
    this.x=669;
        this.vx=0;
  } else {
    this.x = this.x + this.vx * dt;
  }

  if(this.y<30){
    this.y=30;
    this.vy=0;
  }
  if(this.y>500){
    this.vida-=1
    this.resetar();
  }
};

Foguete.prototype.colisao =function (base){

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
