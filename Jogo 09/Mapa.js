function Mapa(rows, columns, id) {
  this.rows = rows;
  this.columns = columns;
  this.id = 0;
  this.SIZE = 40;
  this.descolamentoX = 0;
  this.vx = 0;

  this.cells = [];

  //imagens
  this.terra = new Image();
  this.terra.src="terra.png";

  this.espinho = new Image();
  this.espinho.src = "espinho.png";

  this.moeda = new Image();
  this.moeda.src = "moeda.png";
  this.item = new Image();
  this.item.src = "itens.png";

  //Mapa Inicial
    //0 Parede / 1 chão /2 Tempo Extra /3 item /4 Espinho
  if(id==0){
    this.cells[0] = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
    this.cells[1] = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4];
    this.cells[2] = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[3] = [4,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[4] = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[5] = [4,3,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[6] = [4,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,4];
    this.cells[7] = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,4];
    this.cells[8] = [4,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[9] = [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[10] =[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4];
    this.cells[11] =[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4];
    this.cells[12] =[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
  } else if(id==1){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,1,0,1,1,1,1,1,3,0,1,5,0];
    this.cells[2]  = [0,1,0,1,0,0,0,0,0,0,1,1,0];
    this.cells[3]  = [0,1,0,1,7,1,1,1,1,1,1,1,0];
    this.cells[4]  = [0,1,0,1,7,1,0,0,1,1,0,0,0];
    this.cells[5]  = [0,7,0,1,0,1,0,1,1,0,0,0,0];
    this.cells[6]  = [0,1,0,1,1,1,0,1,2,0,0,0,0];
    this.cells[7]  = [0,1,0,0,0,1,0,0,0,0,0,0,0];
    this.cells[8]  = [0,2,0,0,1,1,1,1,0,6,6,0,0];
    this.cells[9]  = [0,1,0,1,1,1,1,1,1,6,6,3,0];
    this.cells[10] = [0,1,0,1,0,1,0,0,0,0,0,0,0];
    this.cells[11] = [0,1,1,1,0,1,1,1,1,1,2,0,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  }
}

Mapa.prototype.desenhar = function (ctx,dt,personagem) {
      //0 Parede / 1 chão /2 Tempo Extra /3 item /4 Espinho


      this.descolamentoX = this.descolamentoX + this.vx*dt;
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==0){
      //  ctx.fillStyle = "tan";
      //  ctx.fillRect(c*this.SIZE + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.terra,0,0,100,100,c*this.SIZE + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==1){
        //ctx.fillStyle = "darkgray";
        //ctx.fillRect(c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==2){
        //ctx.fillStyle = "white";
        //ctx.fillRect(c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.item,0,24,24,24,c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);

      } else if(this.cells[r][c]==3){
      //  ctx.fillStyle = "yellow";
        //ctx.fillRect(c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.moeda,0,0,150,150,c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);

      } else if(this.cells[r][c]==4){
        ctx.fillStyle = "black";
        ctx.fillRect(c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
        ctx.drawImage(this.espinho,0,0,150,150,c*this.SIZE  + this.descolamentoX, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
};

Mapa.prototype.verificaParede = function (r,c) {
  /*
  if(r<0 || r>12 || c<0 || c>12){
    return true;
  }*/
  if(this.cells[r][c]!=0){
    return false;
  } else {
    return true;
  }
};

Mapa.prototype.verificaParedeToda = function (r,c, rT, cT) {
/*
  if(r<0 || r>12 || c<0 || c>12){
    return true;
  }
  */
  if(r<0 || c<0){
    return true;
  }

  if(this.cells[r][c]!=0 && this.cells[rT][cT]!=0){
    return false;
  } else {
    return true;
  }
};


Mapa.prototype.verificaComida = function (r,c) {
  if(this.cells[r][c]==2){
    this.cells[r][c]=1;
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaItem = function (r,c){
  if(this.cells[r][c]==3){
    this.cells[r][c]=1;
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaEspinho = function (r,c){
  if(this.cells[r][c]==4){
    return true;
  } else {
    return false;
  }
};




Mapa.prototype.retornaDistanciaParedeY = function (r,c,y,size) {
  var y1 = y;
  var y2 = y + size;
  var tamParedeIni = r*40;
  var tamParedeFim = r*40+40;
  var dist1 = Math.abs(tamParedeFim - y1);
  var dist2 = Math.abs(tamParedeIni - y2);
  return Math.min(dist1,dist2);
};

Mapa.prototype.retornaDistanciaParedeX = function (r,c,x,size) {
  var x1 = x;
  var x2 = x + size;
  var tamParedeIni = c*40;
  var tamParedeFim = c*40+40;
  var dist1 = Math.abs(tamParedeFim - x1);
  var dist2 = Math.abs(tamParedeIni - x2);
  var d=0;
  return Math.min(dist1,dist2);
};
