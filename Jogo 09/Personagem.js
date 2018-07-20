function Personagem (map){
  this.SIZE = 30;
  this.height = this.SIZE;
  this.width = this.SIZE;
  this.vx = 0;
  this.ax = 0;
  this.gx = 7;
  this.vy = 0;
  this.ay = 10;
  this.gy = 1;

  this.x=this.gx * map.SIZE +2;
  this.y=this.gy * 40 +2;
  this.color ="blue";
  this.vida=1;
  this.itens = 0;

  this.xTravado=this.x;

  this.gxT = 1;
  this.gyT = 1;

  this.xReal = this.x;
  this.pulo = false;

  this.bloqueioEsquerda = false;
  this.bloqueioDireita = false;
}

  Personagem.prototype.mover = function (map, dt, gravidade,ctx) {
  var deslocamento = map.descolamentoX*(-1);
  this.gx = Math.floor((this.xReal)/map.SIZE);
  this.gy = Math.floor(this.y/map.SIZE);

  this.xReal = 280+deslocamento;

  ctx.font = '20pt Arial';
  ctx.fillText(this.gx, 300, 270);
  ctx.fillText(this.xReal, 300, 370);
  ctx.fillText(map.descolamentoX, 300, 470);

  this.extraX=this.x;
  //this.vy = this.vy + (gravidade + this.ay+10) * dt;
  //this.y = this.y + this.vy * dt;


  /*
  this.vy = this.vy + (gravidade + this.ay+10) * dt;
  this.y = this.y + this.vy * dt;
  */

  this.gxT = Math.floor((this.xReal + this.width)/map.SIZE);
  this.gyT = Math.floor((this.y + this.height)/map.SIZE);

  //Para Movimentação para Baixo
  if(map.verificaParedeToda(this.gy+1,this.gx, this.gy+1,this.gxT)==true && this.vy>0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeY(this.gy+1,this.gx,this.y,this.SIZE)>5){
      //Movimenta se longe da parede
      this.vy = this.vy + (gravidade + this.ay+10) * dt;
      this.y = this.y + this.vy * dt;
    } else {
      //Não faz nada se proximo do chao
      this.pulo=true;

    }
  } else if (map.verificaParede(this.gy+1,this.gx)==false) {
    this.vy = this.vy + (gravidade + this.ay+10) * dt;
    this.y = this.y + this.vy * dt;
  }

  //Para Movimentação para Cima
  if(map.verificaParedeToda(this.gy-1,this.gx,this.gy-1,this.gxT)==true && this.vy<0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeY(this.gy-1,this.gx,this.y,this.SIZE)>5){
      //Movimenta se longe da parede
      this.vy = this.vy + (gravidade + this.ay+10) * dt;
      this.y = this.y + this.vy * dt;
    } else {
      //Não faz nada se proximo da parede
      this.vy = 0 + (gravidade) * dt;
      this.y = this.y + this.vy * dt;

    }
  } else if (map.verificaParede(this.gy-1,this.gx)==false && this.vy<0) {
      this.vy = this.vy + (gravidade + this.ay+10) * dt;
      this.y = this.y + this.vy * dt;
      this.pulo=false;

  }

  //Para Movimentação para Esquerda

  /*
  if(map.verificaParedeToda(this.gy,this.gx-1,this.gyT,this.gx-1)==true){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeX(this.gy,this.gx-1,this.xReal,this.SIZE)>10){
      //Movimenta se longe da parede
        this.bloqueioEsquerda = false;
    } else {
      //Não faz nada se proximo da parede
      this.bloqueioEsquerda = true;
    }
  } else if (map.verificaParede(this.gy,this.gx-1)==false) {
    this.bloqueioEsquerda = false;
  }
*/
  //Para Movimentação para Direita
  if(map.verificaParedeToda(this.gy,this.gx+1,this.gyT,this.gx+1)==true && this.vx>0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeX(this.gy,this.gx+1,this.xReal,this.SIZE)>3){
      //Movimenta se longe da parede
      this.x =  this.x + this.vx*dt;
      this.bloqueioDireita = false;
    } else {
      //Não faz nada se proximo da parede
      this.bloqueioDireita = true;
    }
  } else if (map.verificaParede(this.gy,this.gx+1)==false && this.vx>0) {
    this.x =  this.x+this.vx*dt;
    this.bloqueioDireita = false;
  }
//  */

};

  Personagem.prototype.desenhar = function (ctx,map){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xTravado,this.y,this.width,this.height);
ctx.fillText(map.retornaDistanciaParedeX(this.gy,this.gx-1,this.xReal,this.SIZE), 300, 121);
  };

  Personagem.prototype.verificaMovCima = function (map) {
    if(map.verificaParede(personagem.gy-1,personagem.gx)==true){
      if((this.x%map.SIZE < 3)){
        return false;
      }
      return true;
    } else {
      return true;
    }

  };

  Personagem.prototype.verificaMovCima = function (map) {
    if(map.verificaParede(personagem.gy-1,personagem.gx)==true){
      if((this.y%map.SIZE < 4)){
        this.y+=5;
        return false;
      }
      return true;
    } else {
      return true;
    }

  };
