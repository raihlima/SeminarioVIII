function Mapa(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  this.SIZE = 40;
  this.cells = [];  //0 indestrutivel / 1 chão / 2 destrutivel
  for (var r = 0; r < rows; r++) {
    this.cells[r] = [];
    for (var c = 0; c < columns; c++) {
      //Bordas do Mapa
      //Indestrutivel
      if(r==0 || r==(rows-1)){
        this.cells[r][c] = 0;
      } else if(c==0 || c==(columns-1)){
        this.cells[r][c] = 0;
      } else if((c%2==0)&&(r%2==0)){
        this.cells[r][c] = 0;
      } else if(this.cells[r][c] != 0){
        var rand = (Math.random() * 100);

        //Bloquear posicao inicial
        if((r==1 && (c==1 || c==2)||(r==2 && c==1)||((r+3==rows && c+2==columns)||((c+3==columns || c+2==columns)&& r+2==rows)))){
          this.cells[r][c] = 1;
        }
        else if(rand<=70){
          this.cells[r][c] = 2;
        } else {
          this.cells[r][c] = 1;
        }

      //  var rand = (Math.random() * 100);
      }
    }
  }
}

Mapa.prototype.desenhar = function (ctx) {
  for (var r = 0; r < this.cells.length; r++) {
    for (var c = 0; c < this.cells[0].length; c++) {
      if(this.cells[r][c]==0){
        ctx.fillStyle = "grey";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==1){
        ctx.fillStyle = "darkgray";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      } else if(this.cells[r][c]==2){
        ctx.fillStyle = "orange";
        ctx.fillRect(c*this.SIZE, r*this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }
};

Mapa.prototype.verificaParede = function (r,c) {
  if(this.cells[r][c]==1){
    return false;
  } else {
    return true;
  }
};

Mapa.prototype.verificaCaixa = function () {
  if(this.cells[r][c]==2){
    return false;
  } else {
    return true;
  }
};

Mapa.prototype.destroiCaixa = function (){

};
