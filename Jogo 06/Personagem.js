function Personagem (mapa){
  this.height = 40;
  this.width = 40;
  this.SIZE = 40;
  this.vx = this.gx = 1;
  this.vy = this.gy = 1;
  this.x=this.gx*mapa.SIZE;
  this.y=this.gy*mapa.SIZE;
  this.color ="blue";
  this.vida=1;
  this.itens = 0;
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
  this.gx = Math.floor(this.vx);
  this.gy = Math.floor(this.vy);
  this.x =  this.gx * map.SIZE;
  this.y =  this.gy * map.SIZE;

  if(map.verificaMina(this.gy,this.gx)==true){
    this.vida-=1;
  }
};


  Personagem.prototype.desenhar = function (ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
  };
