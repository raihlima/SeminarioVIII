function Asteroide(){
  this.x = Math.floor(Math.random() * 700);
  this.y = 50;
  this.vx = 0;
  this.vy = 90;
  this.width = 30;
  this.height = 30;
  this.color = "wheat";
  this.energia = 2;
  this.velocidade = 1;
  this.mirando = false;
}

Asteroide.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
};

Asteroide.prototype.movimento = function (dt) {
  this.y=this.y+this.vy*this.velocidade*dt;
  this.x=this.x+this.vx*this.velocidade*dt;
};

Asteroide.prototype.verificaSaida = function () {
  if(this.y>480){
    return true;
  } else {
    return false;
  }
};

Asteroide.prototype.verificaMorte = function () {
  if(this.energia==0){
    return true;
  } else {
    return false;
  }
};

Asteroide.prototype.calculaAngulo = function (x){
  if(this.mirando==false){
    ctx.font = '30pt Arial';
    ctx.textAlign = "start";
    ctx.fillText(x, 350, 250);
    var tamX = (this.x+ (this.width/2)) - (50 + (180 * x) +25);
    var tamY = (this.y + (this.height/2)) - (400);
    var tamR = Math.pow(tamX, 2) + Math.pow(tamY, 2);
    tamR = Math.sqrt(tamR);
    this.vx = tamX/tamY * 90 *dt;

    this.mirando ==true;
  }
}

Asteroide.prototype.reseta = function (){
  this.x = Math.floor(Math.random() * 700);
  this.y = 0;
  this.mirando = false;
  this.energia = 2;
}