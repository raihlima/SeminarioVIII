function Predio(x){
  this.x = 50 + (180 * x);
  this.y = 400;
  this.height = 80;
  this.vx=1;
  this.width = 50;
  this.vida = 3;
  this.color = "gray";

}

Predio.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
};

Predio.prototype.demolir = function () {
  this.vida -=1;
  if(this.vida <1){
    this.color = "black";
  } else {
    this.color = "blue";
  }

};

Predio.prototype.mover = function () {
  this.x = this.x + this.vx;
};

Predio.prototype.verificaColisao = function (asteroide) {
  if(this.color != "black"){
    if((asteroide.x<this.x+this.width && asteroide.x>this.x)||(asteroide.x+asteroide.width>this.x && asteroide.x+asteroide.width<this.x+this.width)){
      if((asteroide.y<this.y+this.height && asteroide.y>this.y)||(asteroide.y+asteroide.height>this.y && asteroide.y+asteroide.width<this.y+this.height)){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

Predio.prototype.morte
