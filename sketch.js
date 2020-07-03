let jogo;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  frameRate (40);
  jogo = new Jogo();
  jogo.setup();
  menu = new Menu;
  scenes = {
    menu,
    jogo,
  };
  managerButton = new ManagerButton('Start', width / 2, height / 2);
  
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}