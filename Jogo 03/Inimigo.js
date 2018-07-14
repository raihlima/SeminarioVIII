function Inimigo(numero,pos){
  //Inimigo 1
  this.x1 = 700 + (numero*200);
  this.y1 = 0;
  this.width1 = 50;
  this.height1 = Math.random()*300+50;
  this.color = "red";
  this.sobra = this.height1;

  //Inimigo 2
  this.x2 = this.x1;
  this.y2 = this.sobra+150;
  this.width2 = 50;
  this.height2 = 500;

}

Inimigo.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x1,this.y1,this.width1,this.height1);

  ctx.fillRect(this.x2,this.y2,this.width2,this.height2);
  ctx.strokeStyle = "white";
};

Inimigo.prototype.atualizar = function (ctx){
  this.x1 -=1.5;
  this.x2 = this.x1;
}

Inimigo.prototype.contaPonto = function (){
  if(this.x1<-50){
    return true;
  } else {
    return false;
  }
}

Inimigo.prototype.resetarInimigo = function(){
  this.x1=700;
  this.height1 = Math.random()*200+50;
  this.sobra = this.height1;
  this.y2 = this.sobra+150;
}
