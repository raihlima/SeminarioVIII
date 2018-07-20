function Personagem (map){
  this.SIZE = 30;
  this.height = this.SIZE;
  this.width = this.SIZE;
  this.vx = 0;
  this.gx = 1;
  this.vy = 0;
  this.gy = 1;
  this.x=this.gx * map.SIZE +2;
  this.y=this.gy*40 +2;
  this.color ="blue";
  this.vida=1;
  this.itens = 0;

  this.gxT = 7
  this.gyT = 1;
}

  Personagem.prototype.mover = function (map, dt) {
  this.gx = Math.floor(this.x/map.SIZE);
  this.gy = Math.floor(this.y/map.SIZE);

  this.gxT = Math.floor((this.x + this.width)/map.SIZE);
  this.gyT = Math.floor((this.y + this.height)/map.SIZE);

  //Para Movimentação para Baixo
  if(map.verificaParedeToda(this.gy+1,this.gx, this.gy+1,this.gxT)==true && this.vy>0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeY(this.gy+1,this.gx,this.y,this.SIZE)>3){
      //Movimenta se longe da parede
      this.y =  this.y+this.vy*dt;
    } else {
      //Não faz nada se proximo da parede
    }
  } else if (map.verificaParede(this.gy+1,this.gx)==false && this.vy>0) {
    this.y =  this.y+this.vy*dt;
  }

  //Para Movimentação para Cima
  if(map.verificaParedeToda(this.gy-1,this.gx,this.gy-1,this.gxT)==true && this.vy<0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeY(this.gy-1,this.gx,this.y,this.SIZE)>3){
      //Movimenta se longe da parede
      this.y =  this.y+this.vy*dt;
    } else {
      //Não faz nada se proximo da parede
    }
  } else if (map.verificaParede(this.gy-1,this.gx)==false && this.vy<0) {
    this.y =  this.y+this.vy*dt;
  }

  //Para Movimentação para Esquerda
  if(map.verificaParedeToda(this.gy,this.gx-1,this.gyT,this.gx-1)==true && this.vx<0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeX(this.gy,this.gx-1,this.x,this.SIZE)>3){
      //Movimenta se longe da parede
      this.x =  this.x + this.vx*dt;
    } else {
      //Não faz nada se proximo da parede
    }
  } else if (map.verificaParede(this.gy,this.gx-1)==false && this.vx<0) {
    this.x =  this.x+this.vx*dt;
  }

  //Para Movimentação para Direita
  if(map.verificaParedeToda(this.gy,this.gx+1,this.gyT,this.gx+1)==true && this.vx>0){
    //Calculador de Distancia
    if(map.retornaDistanciaParedeX(this.gy,this.gx+1,this.x,this.SIZE)>3){
      //Movimenta se longe da parede
      this.x =  this.x + this.vx*dt;
    } else {
      //Não faz nada se proximo da parede
    }
  } else if (map.verificaParede(this.gy,this.gx+1)==false && this.vx>0) {
    this.x =  this.x+this.vx*dt;
  }

};



  Personagem.prototype.desenhar = function (ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
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
