function Mapa(rows, columns,id) {
  this.rows = rows;
  this.columns = columns;
  this.id = id;
  this.SIZE = 40;

  this.cells = [];

  //Mapa Inicial
    //0 Parede / 1 chão / 2 comida /3 item /4 Andar baixo /5 Andar cima //6 Lama // 7 calor
  if(id==0){
    this.cells[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1] = [0,1,0,1,1,1,1,1,1,0,1,4,0];
    this.cells[2] = [0,1,0,1,1,0,1,1,1,0,1,1,0];
    this.cells[3] = [0,1,0,1,1,0,0,1,1,0,1,1,0];
    this.cells[4] = [0,1,0,1,1,1,0,1,1,0,1,1,0];
    this.cells[5] = [0,1,0,1,0,1,0,1,1,0,1,1,0];
    this.cells[6] = [0,1,1,1,0,1,0,1,2,0,1,0,0];
    this.cells[7] = [0,0,0,0,0,1,0,0,0,0,1,0,0];
    this.cells[8] = [0,1,7,7,1,1,1,1,1,1,1,0,0];
    this.cells[9] = [0,1,1,0,1,1,1,1,1,1,1,3,0];
    this.cells[10] = [0,1,1,0,1,0,0,0,0,0,0,0,0];
    this.cells[11] = [0,3,3,0,1,1,1,1,1,1,2,0,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  } else if(id==1){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,4,0,1,1,1,1,1,3,0,1,5,0];
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

  } else if(id==2){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,5,0,1,1,1,1,1,3,0,1,3,0];
    this.cells[2]  = [0,1,1,1,0,0,0,0,0,0,1,1,0];
    this.cells[3]  = [0,0,0,1,0,0,1,6,6,1,1,1,0];
    this.cells[4]  = [0,0,0,1,0,0,2,0,1,1,1,0,0];
    this.cells[5]  = [0,6,1,1,0,0,0,0,1,0,1,0,0];
    this.cells[6]  = [0,3,0,1,1,1,1,1,2,1,1,0,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,0,0];
    this.cells[8]  = [0,0,0,0,0,1,1,1,0,1,0,4,0];
    this.cells[9]  = [0,1,1,1,1,1,1,1,1,1,0,7,0];
    this.cells[10] = [0,1,0,1,0,1,0,0,0,0,0,1,0];
    this.cells[11] = [0,2,0,1,0,1,1,1,1,1,6,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==3){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,4,0,1,1,1,1,1,1,0,0,3,0];
    this.cells[2]  = [0,1,0,2,0,0,0,0,1,1,1,7,0];
    this.cells[3]  = [0,7,0,1,0,0,2,0,0,1,0,3,0];
    this.cells[4]  = [0,1,1,1,0,0,1,1,0,1,1,0,0];
    this.cells[5]  = [0,1,0,1,1,0,0,1,0,0,1,0,0];
    this.cells[6]  = [0,1,0,0,1,1,0,1,1,1,1,0,0];
    this.cells[7]  = [0,1,0,0,0,1,0,1,1,1,0,0,0];
    this.cells[8]  = [0,1,0,0,0,1,0,0,0,6,0,5,0];
    this.cells[9]  = [0,1,7,7,1,1,1,1,1,6,1,1,0];
    this.cells[10] = [0,0,0,1,0,1,0,0,0,0,0,0,0];
    this.cells[11] = [0,0,0,1,0,2,1,1,1,1,6,2,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==4){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,5,0,0,0,0,6,3,6,1,0,2,0];
    this.cells[2]  = [0,1,1,1,1,0,1,0,0,1,0,1,0];
    this.cells[3]  = [0,0,0,0,1,0,1,0,0,1,0,1,0];
    this.cells[4]  = [0,1,1,1,1,0,1,1,0,1,1,1,0];
    this.cells[5]  = [0,2,0,0,0,0,0,1,0,0,1,1,0];
    this.cells[6]  = [0,1,1,1,1,1,0,1,1,1,1,1,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,1,0];
    this.cells[8]  = [0,4,0,3,0,1,0,0,0,1,0,7,0];
    this.cells[9]  = [0,1,0,1,1,1,1,1,1,1,0,1,0];
    this.cells[10] = [0,2,0,0,0,0,0,0,0,0,3,1,0];
    this.cells[11] = [0,7,1,1,1,1,1,1,1,1,1,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==5){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,3,0,1,0,0,0,4,0,2,0,0,0];
    this.cells[2]  = [0,6,0,1,1,0,1,1,0,1,0,0,0];
    this.cells[3]  = [0,6,0,0,1,0,7,0,0,1,0,0,0];
    this.cells[4]  = [0,1,1,1,1,0,1,1,0,1,0,3,0];
    this.cells[5]  = [0,1,0,0,0,0,0,2,0,1,0,6,0];
    this.cells[6]  = [0,1,1,1,1,1,1,1,1,1,6,1,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,2,0];
    this.cells[8]  = [0,5,0,0,0,1,0,0,0,1,0,0,0];
    this.cells[9]  = [0,1,0,2,7,1,1,1,1,1,0,0,0];
    this.cells[10] = [0,1,1,0,0,0,0,1,0,0,0,3,0];
    this.cells[11] = [0,0,1,1,1,1,1,1,1,1,1,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==6){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,3,0,1,0,0,0,5,0,2,0,0,0];
    this.cells[2]  = [0,6,0,1,1,0,1,1,0,1,0,0,0];
    this.cells[3]  = [0,6,0,0,1,0,7,0,0,1,0,0,0];
    this.cells[4]  = [0,1,1,1,1,0,1,1,0,1,0,3,0];
    this.cells[5]  = [0,1,0,0,0,0,0,2,0,1,0,6,0];
    this.cells[6]  = [0,1,1,1,1,1,1,1,1,1,6,1,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,2,0];
    this.cells[8]  = [0,4,0,0,0,1,0,0,0,1,0,0,0];
    this.cells[9]  = [0,1,0,2,7,1,1,1,1,1,0,0,0];
    this.cells[10] = [0,1,1,0,0,0,0,1,0,0,0,3,0];
    this.cells[11] = [0,0,1,1,1,1,1,1,1,1,1,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==7){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,4,0,0,0,0,6,3,6,1,0,2,0];
    this.cells[2]  = [0,1,1,1,1,0,1,0,0,1,0,1,0];
    this.cells[3]  = [0,0,0,0,1,0,1,0,0,1,0,1,0];
    this.cells[4]  = [0,1,1,1,1,0,1,1,0,1,1,1,0];
    this.cells[5]  = [0,2,0,0,0,0,0,1,0,0,1,1,0];
    this.cells[6]  = [0,1,1,1,1,1,0,1,1,1,1,1,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,1,0];
    this.cells[8]  = [0,5,0,3,0,1,0,0,0,1,0,7,0];
    this.cells[9]  = [0,1,0,1,1,1,1,1,1,1,0,1,0];
    this.cells[10] = [0,2,0,0,0,0,0,0,0,0,3,1,0];
    this.cells[11] = [0,7,1,1,1,1,1,1,1,1,1,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==8){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,5,0,1,1,1,1,1,1,0,0,3,0];
    this.cells[2]  = [0,1,0,2,0,0,0,0,1,1,1,7,0];
    this.cells[3]  = [0,7,0,1,0,0,2,0,0,1,0,3,0];
    this.cells[4]  = [0,1,1,1,0,0,1,1,0,1,1,0,0];
    this.cells[5]  = [0,1,0,1,1,0,0,1,0,0,1,0,0];
    this.cells[6]  = [0,1,0,0,1,1,0,1,1,1,1,0,0];
    this.cells[7]  = [0,1,0,0,0,1,0,1,1,1,0,0,0];
    this.cells[8]  = [0,1,0,0,0,1,0,0,0,6,0,4,0];
    this.cells[9]  = [0,1,7,7,1,1,1,1,1,6,1,1,0];
    this.cells[10] = [0,0,0,1,0,1,0,0,0,0,0,0,0];
    this.cells[11] = [0,0,0,1,0,2,1,1,1,1,6,2,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==9){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,4,0,1,1,1,1,1,3,0,1,3,0];
    this.cells[2]  = [0,1,1,1,0,0,0,0,0,0,1,1,0];
    this.cells[3]  = [0,0,0,1,0,0,1,6,6,1,1,1,0];
    this.cells[4]  = [0,0,0,1,0,0,2,0,1,1,1,0,0];
    this.cells[5]  = [0,6,1,1,0,0,0,0,1,0,1,0,0];
    this.cells[6]  = [0,3,0,1,1,1,1,1,2,1,1,0,0];
    this.cells[7]  = [0,0,0,0,0,1,0,0,0,1,0,0,0];
    this.cells[8]  = [0,0,0,0,0,1,1,1,0,1,0,5,0];
    this.cells[9]  = [0,1,1,1,1,1,1,1,1,1,0,7,0];
    this.cells[10] = [0,1,0,1,0,1,0,0,0,0,0,1,0];
    this.cells[11] = [0,2,0,1,0,1,1,1,1,1,6,1,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  } else if(id==10){
    this.cells[0]  = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1]  = [0,5,0,1,1,1,1,1,3,0,1,4,0];
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

  } else if(id==11){
    this.cells[0] = [0,4,0,0,0,0,0,0,0,0,0,0,0];
    this.cells[1] = [0,1,0,1,1,1,1,1,1,0,1,5,0];
    this.cells[2] = [0,1,0,1,1,0,1,1,1,0,1,1,0];
    this.cells[3] = [0,1,0,1,1,0,0,1,1,0,1,1,0];
    this.cells[4] = [0,1,0,1,1,1,0,1,1,0,1,1,0];
    this.cells[5] = [0,1,0,1,0,1,0,1,1,0,1,1,0];
    this.cells[6] = [0,1,1,1,0,1,0,1,2,0,1,0,0];
    this.cells[7] = [0,0,0,0,0,1,0,0,0,0,1,0,0];
    this.cells[8] = [0,1,7,7,1,1,1,1,1,1,1,0,0];
    this.cells[9] = [0,1,1,0,1,1,1,1,1,1,1,3,0];
    this.cells[10] = [0,1,1,0,1,0,0,0,0,0,0,0,0];
    this.cells[11] = [0,3,3,0,1,1,1,1,1,1,2,0,0];
    this.cells[12] = [0,0,0,0,0,0,0,0,0,0,0,0,0];

  }

}

Mapa.prototype.desenhar = function (ctx) {
  //0 Parede / 1 chão / 2 comida /3 item /4 Andar baixo /5 Andar cima //6 Lama // 7 calor
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==0){
        ctx.fillStyle = "tan";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==1){
        ctx.fillStyle = "darkgray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==2){
        ctx.fillStyle = "white";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==3){
        ctx.fillStyle = "yellow";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==4){
        ctx.fillStyle = "black";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==5){
        ctx.fillStyle = "blue";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==6){
        ctx.fillStyle = "SaddleBrown";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==7){
        ctx.fillStyle = "DarkOrange";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
};

Mapa.prototype.verificaParede = function (r,c) {
  if(r<0 || r>12 || c<0 || c>12){
    return true;
  }
  if(this.cells[r][c]!=0){
    return false;
  } else {
    return true;
  }
};

Mapa.prototype.verificaParedeToda = function (r,c, rT, cT) {
  if(r<0 || r>12 || c<0 || c>12){
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

Mapa.prototype.verificaAndarBaixo = function (r,c){
  if(this.cells[r][c]==4){
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaAndarCima = function (r,c){
  if(this.cells[r][c]==5){
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaLama = function (r,c){
  if(this.cells[r][c]==6){
    return true;
  } else {
    return false;
  }
};

Mapa.prototype.verificaCalor = function (r,c){
  if(this.cells[r][c]==7){
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
