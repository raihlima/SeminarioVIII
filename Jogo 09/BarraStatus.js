function BarraStatus (){
  this.x = 0;
  this.y = 500;
  this.width = 600;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, energia, itens) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x,this.y,this.width,this.height);


  //Texto no Menu
  ctx.textAlign = "start";
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Tempo: ", 10, 523);
  if(energia>50){
    ctx.fillStyle = "green";
  } else if(energia>25){
    ctx.fillStyle = "yellow";
  } else {
    ctx.fillStyle = "red";
  }
  ctx.fillRect(90,505,energia,20);
  ctx.strokeStyle = "black";
  ctx.strokeRect(90,505,energia,20);

  ctx.fillStyle = "white";
  ctx.fillText("Itens: ", 400, 523);
  ctx.fillText(itens, 480, 523);

};
