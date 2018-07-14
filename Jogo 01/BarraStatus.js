function BarraStatus (){
  this.x = 0;
  this.y = 0;
  this.width = 700;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (pontoAtual, pontoMax) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";


  //Texto no Menu
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Pontução Atual: ", 20, 21);
  ctx.fillText(pontoAtual, 110, 21);
  ctx.fillText("Pontuação Máxima: ", 300, 21);
  ctx.fillText(pontoMax, 420, 21);
};
