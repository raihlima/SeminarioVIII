function Bomba (gx,gy,map,tamanho,tempo){
  this.tamanho = tamanho;
  this.gx = gx;
  this.gy = gy;
  this.x =  this.gx * 40;
  this.y =  this.gy * 40;
  this.width = this.height = 40;
  this.tempo = tempo;
  this.velocidadeDetonacao = 0.1;
  this.color = "red";
  this.ativo = true;
  this.fragmentos = [];
//  this.preencherFragmentos(mapa);
}

function Fragmento (gy,gx){
  this.gx = gx;
  this.gy = gy;
  this.x =  this.gx * 40;
  this.y =  this.gy * 40;
  this.width = this.height = 40;
  this.color = "red";

}

Bomba.prototype.desenhar = function (ctx) {
  if(this.ativo==true){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    this.tempo+=this.velocidadeDetonacao;
    for(var i=0;i<this.fragmentos.length;i++){
      ctx.fillStyle = this.fragmentos[i].color;
      ctx.fillRect(this.fragmentos[i].x,this.fragmentos[i].y,this.fragmentos[i].width,this.fragmentos[i].height);
    }
  }
};

Bomba.prototype.explode = function (ctx,map) {
  if(this.tempo>10 && this.tempo <14){
    this.color = "purple";
    if(this.fragmentos.length==0){
      //this.explosaoLateral(ctx,map);
      this.preencherFragmentos(map);
    }
  } else if(this.tempo>15){
    this.color = "yellow";
  }

};

Bomba.prototype.explosaoLateral = function (ctx,map) {
  //Explosao para GX positivo
  for(var i=0;i<this.tamanho;i++){
    if(map.verificaParede(this.gy,this.gx+i)==true){
  break;
  }
  if(map.verificaCaixa(this.gy,this.gx+i)==true){
   map.cells[this.gy][this.gx+i] = 1;

      break;
    }
      //this.fragmentos.push(new Fragmento(this.gy,this.gx+i));

  }
};

Bomba.prototype.preencherFragmentos = function(map){
  //GX positivo
  for(var i=0;i<=this.tamanho;i++){
    if(map.verificaParede(this.gy,this.gx+i)==true){
      break;
    } if(map.verificaCaixa(this.gy,this.gx+i)==true){
      map.destroiCaixa(this.gy,this.gx+i);
      break;
    }
    this.fragmentos.push(new Fragmento(this.gy,this.gx+i));
  }
  //GX negativo
  for(var i=0;i<=this.tamanho;i++){
    if(map.verificaParede(this.gy,this.gx-i)==true){
      break;
    } if(map.verificaCaixa(this.gy,this.gx-i)==true){
      map.destroiCaixa(this.gy,this.gx-i);
      break;
    }
    this.fragmentos.push(new Fragmento(this.gy,this.gx-i));
  }
  //GY positivo
  for(var i=0;i<=this.tamanho;i++){
    if(map.verificaParede(this.gy+i,this.gx)==true){
      break;
    } if(map.verificaCaixa(this.gy+i,this.gx)==true){
      map.destroiCaixa(this.gy+i,this.gx);
      break;
    }
    this.fragmentos.push(new Fragmento(this.gy+i,this.gx));
  }
  //GY negativo
  for(var i=0;i<=this.tamanho;i++){
    if(map.verificaParede(this.gy-i,this.gx)==true){
      break;
    } if(map.verificaCaixa(this.gy-i,this.gx)==true){
      map.destroiCaixa(this.gy-i,this.gx);
      break;
    }
    this.fragmentos.push(new Fragmento(this.gy-i,this.gx));
  }
}
