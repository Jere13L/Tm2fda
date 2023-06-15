let pincel2 = [];
let pincel3 = [];
let pincel6 = [];
let linea0 = [];
let linea1 = [];
let cantidad = 4;
let cant = 2;
let can = 2;
let contador = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);

  pincel2 = new Array(cantidad);
  for (let i = 0; i < cantidad; i++) {
    let nombre = "pincel2" + i + "pincel2.png";
    pincel2[i] = loadImage("imagenes/pincel2.png");
  }

  pincel3 = new Array(cantidad);
  for (let i = 0; i < cantidad; i++) {
    let nombre = "pincel3" + i + "pincel3.png";
    pincel3[i] = loadImage("imagenes/pincel3.png");
  }

  pincel6 = new Array(can);
  for (let i = 0; i < can; i++) {
    let nombre = "pincel6" + i + "pincel6.png";
    pincel6[i] = loadImage("imagenes/pincel6.png");
  }
  linea0 = new Array(cant);
  for (let i = 0; i < can; i++) {
    let nombre = "linea0" + i + "linea0.png";
    linea0[i] = loadImage("imagenes/linea0.png");
  }
  linea1 = new Array(cant);
  for (let i = 0; i < can; i++) {
    let nombre = "linea1" + i + "linea1.png";
    linea1[i] = loadImage("imagenes/linea1.png");
  }


  background(255);
}

function draw() {
  for (let i = 0; i < 10; i++) {
    if (contador < 600) { // Limita a 10 repeticiones
      let cua = int(random(cantidad));
      let x = random(width);
      let y = random(height);
      push();
      let angulo = radians(map(x, random(), width, random(), random()));
      translate(x, y);
      rotate(angulo);
      scale(random(0.2, 0.5));
      let cual = int(random(can));
      image(pincel2[cual], x, y);
      pop();
  
      contador++; // Incrementa el contador
  }
}
  for (let i = 0; i < 10; i++) {
    if (contador < 580) { // Limita a 10 repeticiones
      let cua = int(random(cantidad));
      let x = random(width);
      let y = random(height);
  
      push();
      let angulo = radians(map(x, random(), width, random(), random()));
      translate(x, y);
      rotate(angulo);
      scale(random(0.2, 0.5));
      let cual = int(random(can));
     
      image(pincel3[cual], x, y);
      pop();
  
      contador++; // Incrementa el contador
  }
}
for (let i = 0; i < 10; i++) {
  if (contador < 480) { // Limita a 10 repeticiones
    let cua = int(random(cantidad));
    let x = random(width);
    let y = random(height);

    push();
    let angulo = radians(map(x, random(), width, random(), random()));
    translate(x, y);
    rotate(angulo);
    scale(random(0.2, 0.5));
    let cual = int(random(can));
    image(pincel6[cual], x, y);
    pop();

    contador++; // Incrementa el contador
}
}
for (let i = 0; i < 10; i++) {
  if (contador < 570) { // Limita a 10 repeticiones
    let cua = int(random(cantidad));
    let x = random(width);
    let y = random(height);

    push();
    let angulo = radians(map(x, random(), random, random(), random()));
    translate(x, y);
    rotate(angulo);
    scale(random(0.7, 1.80));
    let cual = int(random(can));
    image(linea0[cual], x, y);
    pop();

    contador++; // Incrementa el contador
}
}
for (let i = 0; i < 10; i++) {
  if (contador < 450) { // Limita a 10 repeticiones
    let cua = int(random(cantidad));
    let x = random(width);
    let y = random(height);

    push();
    let angulo = radians(map(x, random(), random, random(), random()));
    translate(x, y);
    rotate(angulo);
    scale(random(0.4, 1.60));
    let cual = int(random(can));
    image(linea1[cual], x, y);
    pop();

    contador++; // Incrementa el contador
}
}

}
