function Barreira (x,y,l,a){
  this.x = x;
  this.y= y;
  this.width = l;
  this.height = a;
  this.color = "red";
}

Barreira.prototype.desenhar = function(){
  ctx.fillStyle = this.color;
  ctx.strokeStyle = "black";
  //ctx.strokeRect(this.x,this.y,this.width,this.height);
  ctx.fillRect(this.x,this.y,this.width,this.height);
}

Barreira.prototype.verificaColisao = function (alvo) {
  if((alvo.y > this.y && alvo.y<this.y+this.height) || (alvo.y+alvo.height > this.y && alvo.y+alvo.height <this.y+this.height) ){
    if((alvo.x > this.x && alvo.x<this.x+this.width) || (alvo.x+alvo.width > this.x && alvo.x+alvo.width<this.x+this.width)){
      //if(this.ativo==true){
        //this.color = "darkblue";
        return true;
      //}
    //  return false;
    }
    return false;
  }
  return false;
};
