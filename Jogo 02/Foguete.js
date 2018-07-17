function Foguete(cor){
  this.x = 350;
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.energia = 100;
  this.vida=3;

  //Seleção de color
  if(cor==0){
    this.color = "lime";
    this.corOriginal=this.color;
  } else if(cor==1){
    this.color = "wheat";
    this.corOriginal=this.color;
  } else {
    this.color = "Teal";
    this.corOriginal=this.color;
  }
}

Foguete.prototype.getVida = function () {
  return this.vida;
};

Foguete.prototype.getEnergia = function () {
  return this.energia;
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
  this.energia = 100;
};

Foguete.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
};


Foguete.prototype.atualizar = function (dt) {
  //this.vy = this.vy * dt;
  this.y = this.y + this.vy * dt;

  this.vx = this.vx + this.ax*dt;
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
  if(this.y>470){
    this.y=470;
  }
};

Foguete.prototype.colisao = function (inimigo){
  if(this.y>=inimigo.y && this.y<=(inimigo.y+inimigo.height)){
    if(this.x>=inimigo.x && this.x<=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  if(this.y+ this.height>=inimigo.y && this.y + this.height <=(inimigo.y+inimigo.height)){
    if(this.x + this.width>=inimigo.x && this.x + this.width <=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  return false;
}
