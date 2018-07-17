function Bomba (gx,gy){
  this.tamanho = 2;
  this.gx = gx;
  this.gy = gy;
  this.x =  this.gx * 40;
  this.y =  this.gy * 40;
  this.width = this.height = 40;
  this.tempo = 0;
  this.color = "red";
  this.ativo = false;
}

Bomba.prototype.desenhar = function (ctx) {
  if(this.ativo==true){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    this.tempo+=0.05;
  }
};

Bomba.prototype.explode = function () {
  if(this.tempo>10){
    this.color = "purple";
    delete this;
  }

};
