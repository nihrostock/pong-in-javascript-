let comprimentoTela = 700;
let larguraTela = 600;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let velocidadeYBolinha = 6;
let velocidadeXBolinha = 6;
let diametroBolinha = 27;
let raioBolinha = diametroBolinha / 2;
let larguraRaquete = 10;
let comprimentoRaquete = 120;
let xMinhaRaquete = 10;
let yMinhaRaquete = 300;
let xRaqueteOponente = comprimentoTela - larguraRaquete - 10
let yRaqueteOponente = 300
let colidiu = false
let meusPontos = 0
let pontosOponente= 0
    
function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);  
  criaBolinha()
  moveBolinha ()
  colideBolinha()
  criaRaquete(xMinhaRaquete, yMinhaRaquete)
  criaRaquete(xRaqueteOponente, yRaqueteOponente)
  moveRaquete()
  //colideRaquete();
  colisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
}

function criaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha (){
  xBolinha = xBolinha + velocidadeXBolinha
  yBolinha = yBolinha + velocidadeYBolinha
}

function colideBolinha(){
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha = velocidadeXBolinha * -1
  }
 
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha = velocidadeYBolinha * -1
  }
}

function criaRaquete(X, Y){
  rect(X, Y, larguraRaquete, comprimentoRaquete);
 
}
function moveRaquete(){
if  (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 10;
  }
    yRaqueteOponente = yBolinha - 50
}

function colidirRaquete(){
 if(
   xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
   yBolinha - raioBolinha < yMinhaRaquete + comprimentoRaquete &&
   yBolinha + raioBolinha > yMinhaRaquete
   ){
   velocidadeXBolinha *= -1;
}
}

function colisaoRaquete(X,Y) {
 
colidiu = collideRectCircle (X, Y, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, diametroBolinha)

if (colidiu) {
  velocidadeXBolinha *= -1;
  }
}

 function mostraPlacar(){
 fill(225);
 text(meusPontos, 200, 50);
 text(pontosOponente, 600, 50);
 }

function pontosJogo(){
   if (xBolinha > 790){
  meusPontos += 1 }
  if (xBolinha < 10){ 
  pontosOponente += 1}
  
}
