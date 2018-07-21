function Tiro (sentido, atirador){

  this.ativo=true;

  if(sentido==0){
    this.height = 10;
    this.width = 5;
    this.x = atirador.x+(atirador.width/2);
    this.y = atirador.y - 5 - this.height;
    this.color = "yellow";
    this.vx = 0;
    this.vy = -400;
    this.corOriginal=this.color;
  } else if(sentido==1){
    this.height = 5;
    this.width = 10;
    this.x = atirador.x + (atirador.width) +5;
    this.y = atirador.y + (atirador.height/2);
    this.color = "yellow";
    this.vx = 400;
    this.vy = 0;
    this.corOriginal=this.color;


  } else if(sentido==2){
    this.height = 10;
    this.width = 5;
    this.x = atirador.x + (atirador.width/2);
    this.y = atirador.y + (atirador.height) + 5;
    this.color = "yellow";
    this.vx = 0;
    this.vy = 400;
    this.corOriginal=this.color;


  } else if(sentido == 3){
    this.height = 5;
    this.width = 10;
    this.x = atirador.x - 5 - this.width;
    this.y = atirador.y + (atirador.height/2);
    this.color = "yellow";
    this.vx = -400;
    this.vy = 0;
    this.corOriginal=this.color;
  }

}

Tiro.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
};

Tiro.prototype.mover = function (dt) {
  this.y = this.y+this.vy *dt;
  this.x = this.x+this.vx *dt;

};

Tiro.prototype.verificaSaidaTela = function(){
  if(this.y<0 || this.y>500){
    return true;
  }
  if(this.x<0 || this.x>700){
    return true;
  }
  return false;
}

Tiro.prototype.verificaColisao = function (alvo) {
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

Tiro.prototype.isAtivo = function () {
  return this.ativo;
};
