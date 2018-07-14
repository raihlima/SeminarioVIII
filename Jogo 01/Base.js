function Base(){
  this.x = Math.floor(Math.random() * 600);
  this.y = 450;
  this.width = 100;
  this.height = 30;
  this.color = "blue";
}

Base.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
};
