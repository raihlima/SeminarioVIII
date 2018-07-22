function Item (x,y){
  this.x=x;
  this.y=y;
  this.vy=70;
  this.width = 30;
  this.height = 30;
  this.rand = Math.trunc(Math.random()*100);


  //0 Invencibilidade // 1 ponto //2 dano extra //3 explosao // 4 vida extra
  if(this.rand<25){
    this.color = "blue";
    this.id =0;
  } else if (this.rand>=25 && this.rand<75){
    this.color = "violet";
    this.id =1;
  }
  else if(this.rand>=75 && this.rand<85){
    this.color = "orange";
    this.id =2;
  } else if(this.rand>=85 && this.rand<90) {
    this.color = "white";
    this.id =3;
  } else {
    this.color = "cyan";
    this.id=4;
  }
}

Item.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
};

Item.prototype.mover = function (dt) {
  this.y = this.y+ this.vy*dt;
};

Item.prototype.verificaColisao = function (alvo) {
  if((this.y >= alvo.y && this.y<=alvo.y+alvo.height) || (this.y+this.height >= alvo.y && this.y+this.height <=alvo.y+alvo.height) ){
    if((this.x > alvo.x && this.x<=alvo.x+alvo.width) || (this.x+this.width > alvo.x && this.x+this.width<=alvo.x+alvo.width)){
      //if(this.ativo==true){
      this.color = "darkblue";
      return true;
      //}
      //  return false;
    }
    return false;
  }
  return false;
};
