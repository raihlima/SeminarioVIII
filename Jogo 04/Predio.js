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
  if(this.vida ==0){
    this.color=="green";
  } else {
    this.color = "blue";
  }

};

Predio.prototype.mover = function () {
  this.x = this.x + this.vx;
};
