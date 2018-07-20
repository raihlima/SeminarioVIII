function ListaMapa(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.SIZE = 40;

  this.cells = [];  //0 indestrutivel / 1 chão / 2 mina /3 escuro /4 tesouro
}

ListaMapa.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==0){
        ctx.fillStyle = "green";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==1){
        ctx.fillStyle = "darkgray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==2){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==3){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==4){
        ctx.fillStyle = "gray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
};

ListaMapa.prototype.verificaParede = function (r,c) {
  if(this.cells[r][c]!=0){
    return false;
  } else {
    return true;
  }
};

ListaMapa.prototype.verificaMina = function (r,c) {
  if(this.cells[r][c]==2){
    return true;
  } else {
    return false;
  }
};

ListaMapa.prototype.verificaTesouro = function (r,c){
  if(this.cells[r][c]==4){
    this.cells[r][c]=1;
    return true;
  } else {
    return false;
  }
};

ListaMapa.prototype.alteraVisibilidade = function (r,c) {
  if(this.cells[r][c]==3){
    this.cells[r][c]=1;
  }
};

ListaMapa.prototype.retornarMinas = function (r,c) {
  var x=0;
  if(this.cells[r-1][c]==2){
    x+=1;
  }
  if(this.cells[r][c-1]==2){
    x+=1;
  }
  if(this.cells[r][c+1]==2){
    x+=1;
  }
  if(this.cells[r+1][c]==2){
    x+=1;
  }
  return x;
};

ListaMapa.prototype.retornarItens = function (r,c){
  var x=0;
  if(this.cells[r-1][c]==4){
    x+=1;
  }
  if(this.cells[r][c-1]==4){
    x+=1;
  }
  if(this.cells[r][c+1]==4){
    x+=1;
  }
  if(this.cells[r+1][c]==4){
    x+=1;
  }
  return x;
}
