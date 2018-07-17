function Personagem (x,mapa){
  this.height = 30;
  this.width = 30;
  this.SIZE = 40;
  this.limiteBomba = 1;

  //se for jogador 1
  if(x==1){
    this.vx = this.gx = 1;
    this.vy = this.gy = 1;
    this.x=this.gx*mapa.SIZE;
    this.y=this.gy*mapa.SIZE;
    this.color ="blue";
  }
  if(x==2){
    this.vx = this.gx = mapa.columns-2;
    this.vy = this.gy = mapa.rows -2;
    this.x=this.gx*mapa.SIZE;
    this.y=this.gy*mapa.SIZE;
    this.color ="green";
  }
}

Personagem.prototype.moverNoMapa = function (map, dt) {
  this.gx = Math.floor(this.x/map.SIZE);
  this.gy = Math.floor(this.y/map.SIZE);

  //direita
  if(this.vx > 0 && map.cells[this.gy][this.gx+1]==1){
    this.x += Math.min((this.gx+1)*map.SIZE - (this.x+this.SIZE/2), this.vx*dt);
  } //esquerda
  else if(this.vx < 0 && map.cells[this.gy][this.gx-1]==1){
    this.x += Math.max((this.gx)*map.SIZE - (this.x-this.SIZE/2), this.vx*dt);
  }
  //sem pressionar
  else {
    this.x = this.x + this.vx*dt;
  }


  if(this.vy >0 && map.cells[this.gy+1][this.gx]==1){
      this.y += Math.min((this.gy+1)*map.SIZE - (this.y+this.SIZE/2),this.vy*dt);
    } else if( this.vy<0 && map.cells[this.gy-1][this.gx]==1){
      this.y += Math.max((this.gy)*map.SIZE - (this.y-this.SIZE/2),this.vy*dt);
    } else {
      this.y = this.y + this.vy*dt;
    }

  };

  Personagem.prototype.mover = function (map, dt) {
  ctx.fillStyle = "wheat";
  ctx.textAlign = "center";
  ctx.font = '20pt Arial';
  ctx.fillText(this.vx, 10, 150);
  ctx.fillText(this.vy, 50, 150);
  ctx.fillText(this.gx, 10, 250);
  ctx.fillText(this.gy, 50, 250);
  ctx.fillText(map.verificaParede(this.gy-1,this.gx), 250, 150);
  ctx.fillText(map.verificaParede(this.gy,this.gx-1), 150, 250);
  ctx.fillText(map.verificaParede(this.gy+1,this.gx+1), 350, 250);
  ctx.fillText(map.verificaParede(this.gy+1,this.gx), 250, 350);

  this.gx = Math.floor(this.vx);
  this.gy = Math.floor(this.vy);
  this.x =  this.gx * map.SIZE;
  this.y =  this.gy * map.SIZE;
};


  Personagem.prototype.desenhar = function (ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
  };
