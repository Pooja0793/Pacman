var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sofia, sofai, cup, edges, playS, death;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8,
  wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wallsGroup,ri,r;

var monster1, monster2, monster3, monster4, mons1, mons2, mon3, mons4, monsGroup, grainsG;
var grains, grains2, grains3, grains4, grains5, grains6, grains7, grains8, grains9, grains10, grains11, grains12 ,grains13, grains14, grains15, grains16, grains17, grains18, grains19;


var lives = 4;

function preload() {
  monster1 = loadImage("mons1.png");
  monster2 = loadImage("mons2.png");
  monster3 = loadImage("mons3.png");
  monster4 = loadImage("mons4.png");
  sofai = loadAnimation("pacman1.png", "pacc.png");
  playS = loadSound("PacmanSo.mp3");
  death = loadSound("pacD1.m4a");
  ri=loadImage("reset.png");

}

function setup() {
  createCanvas(600, 610);
  monsGroup = createGroup();
  wallsGroup = createGroup();
  grainsG=createGroup();

  sofia = createSprite(540, 560, 13, 20);
  sofia.shapeColor = "green";
  sofia.addAnimation("sof", sofai);
  sofia.scale = 0.1;
  //sofia.debug = true;
  sofia.setCollider("circle", 0, 0, 150)
  cup = createSprite(0, 0, 30, 30);
  cup.shapeColor = "yellow";

 createWalls();
  createMonsters();createGrains();
  createGrains();
  
 
  edges = createEdgeSprites();

   playS.play();
   playS.setVolume(0.2);
  playS.loop();
  r=createSprite(300,300,10,10);
  r.addImage("reset",ri);
  r.visible=false;
}

function draw() {
  background("blue");
  if(gameState===PLAY){
    
  
  textSize(15);
  stroke("white");
  fill("white");
  text("LIVES: " + lives, 60, 500)
  stroke("white");
  textSize(11);
  text("T A R G E T", 3, 30);
   text("X" + mouseX + "Y" + mouseY, mouseX, mouseY);


  
   

  movements();


if(lives>0){
  if (monsGroup.isTouching(sofia) || wallsGroup.isTouching(sofia)) {

   lives=lives-1;
    sofia.x = 540;
    sofia.y = 560;
    
  }}
 else{
   gameState=END;
 }   

 }
  

  sofia.bounceOff(edges);
  sofia.bounceOff(wallsGroup);

  monsGroup.bounceOff(wallsGroup);
  monsGroup.bounceOff(edges);


  if (sofia.isTouching(cup)) {
    textFont("kendall");
    stroke("yellow");
    textSize(27);
    text("You win", width / 2, height / 2);
    sofia.velocityX = 0;
    sofia.velocityY = 0;
    gameSate = END;
  }

if(gameState===END){
     sofia.visible=false;
       cup.visible=false;
      r.visible=true;
   monsGroup.destroyEach();
   wallsGroup.destroyEach();
    grainsG.destroyEach();
  playS.stop();
  fill("white");
  textSize(23);
     text("G A M E O V E R " ,200,200);
    if(mousePressedOver(r)){
      reset();
    }
  
  }
  drawSprites();
}

function createWalls() {
  wall1 = createSprite(526, 15, 80, 16);
  wall1.shapeColor = "cyan";
  wallsGroup.add(wall1);

  wall2 = createSprite(92, 19, 20, 80);
  wall2.shapeColor = "cyan";
  wallsGroup.add(wall2);

  wall3 = createSprite(120, 130, 150, 20);
  wall3.shapeColor = "yellow";
  wallsGroup.add(wall3);

  wall4 = createSprite(230, 460, 200, 20);
  wall4.shapeColor = "yellow";
  wallsGroup.add(wall4);

  wall5 = createSprite(209, 18, 40, 20);
  wall5.shapeColor = "red";
  wallsGroup.add(wall5);
  wall6 = createSprite(537, 117, 20, 60);
  wall6.shapeColor = "red";
  wallsGroup.add(wall6);

  wall7 = createSprite(95, 176, 130, 20);
  wall7.shapeColor = "pink";
  wallsGroup.add(wall7);
  wall8 = createSprite(40, 200, 20, 60);
  wall8.shapeColor = "pink";
  wallsGroup.add(wall8);

  wall9 = createSprite(225, 180, 20, 80);
  wall9.shapeColor = "orange";
  wallsGroup.add(wall9);

  wall10 = createSprite(310, 210, 190, 20);
  wall10.shapeColor = "orange";
  wallsGroup.add(wall10);

  wall13 = createSprite(120, 310, 200, 20);
  wall13.shapeColor = "purple";
  wallsGroup.add(wall13);

  wall11 = createSprite(400, 540, 130, 20);
  wall11.shapeColor = "teal";
  wallsGroup.add(wall11);

  wall12 = createSprite(281, 25, 20, 100);
  wall12.shapeColor = "teal";
  wallsGroup.add(wall12);

  wall14 = createSprite(130, 580, 350, 20);
  wall14.shapeColor = "lime";
  wallsGroup.add(wall14);

  wall15 = createSprite(581, 460, 20, 210);
  wall15.shapeColor = "coral";
  wallsGroup.add(wall15);

  wall16 = createSprite(480, 330, 180, 20);
  wall16.shapeColor = "purple";
  wallsGroup.add(wall16);

  wall17 = createSprite(40, 460, 20, 120);
  wall17.shapeColor = "coral";
  wallsGroup.add(wall17);

  wall18 = createSprite(350, 369, 20, 230);
  wall18.shapeColor = "violet";
  wallsGroup.add(wall18);

  wall19 = createSprite(180, 380, 160, 20);
  wall19.shapeColor = "lime";
  wallsGroup.add(wall19);


  wall20 = createSprite(430, 51, 220, 20);
  wall20.shapeColor = "aqua";
  wallsGroup.add(wall20);


  wall21 = createSprite(420, 130, 100, 20);
  wall21.shapeColor = "violet";
  wallsGroup.add(wall21);


  wall22 = createSprite(573, 188, 20, 200);
  wall22.shapeColor = "aqua";
  wallsGroup.add(wall22);
  
  //wallsGroup.setColorEach(178,34,34);
}

function createMonsters() {
  mons1 = createSprite(396,311, 10, 10);
  mons1.addImage(monster1);
  mons1.scale = 2;
 mons1.velocityY=5;
  mons1.velocityX=-5;
 // mons1.debug = true;
  monsGroup.add(mons1);

  mons2 = createSprite(394,174, 10, 10);
  mons2.addImage(monster2);
  mons2.velocityY=5;
  mons2.velocityX=-5;
  mons2.scale=2;
 // mons2.debug = true;
  monsGroup.add(mons2);

  mons3 = createSprite(194, 160, 10, 10);
  mons3.addImage(monster3);
  mons3.scale = 2;
  mons3.velocityY=5;
  mons3.velocityX=-5;
  
 // mons3.debug = true;
  monsGroup.add(mons3);

  mons4 = createSprite(480, 286, 10, 10);
  mons4.addImage(monster4);
  mons4.scale = 2;
 
 // mons4.debug = true;
  monsGroup.add(mons4);
 mons4.velocityY=5;
  mons4.velocityX=-5;
}

function movements(){
  sofia.velocityX = 0;
  sofia.velocityY = 0;

  if (keyDown("right")) {
    sofia.velocityX = 8;
    sofia.velocityY = 0;

 }
  if (keyDown("up")) {
    sofia.velocityY = -8;
    sofia.velocityX = 0;
  }

  if (keyDown("down")) {
    sofia.velocityX = 0;
    sofia.velocityY = 8;
  }

  if (keyDown("left")) {
    sofia.velocityX = -8;
    sofia.velocityY = 0;
  }
}

function createGrains(){
  for (var i = 18; i < 610; i = i + 20) {

    grains=createSprite(8,i,5,5);
    grains.shapeColor="yellow";
     grainsG.add(grains);
    
    grains2=createSprite(58,i,5,5);
     grains2.shapeColor="yellow";
    grainsG.add(grains2);
    
    
    grains3=createSprite(108,i,5,5);
    grains3.shapeColor="yellow";
     grainsG.add(grains3);
    
    grains4=createSprite(158,i,5,5);
     grains4.shapeColor="yellow";
    grainsG.add(grains4);
    
    
    grains5=createSprite(208,i,5,5);
    grains5.shapeColor="yellow";
     grainsG.add(grains5);
    
    grains6=createSprite(258,i,5,5);
     grains6.shapeColor="yellow";
    grainsG.add(grains6);
    
    
    grains7=createSprite(308,i,5,5);
    grains7.shapeColor="yellow";
     grainsG.add(grains7);
    
    grains8=createSprite(368,i,5,5);
     grains8.shapeColor="yellow";
    grainsG.add(grains8);

    
     grains9=createSprite(408,i,5,5);
    grains9.shapeColor="yellow";
     grainsG.add(grains9);
    
    grains10=createSprite(458,i,5,5);
     grains10.shapeColor="yellow";
    grainsG.add(grains10);
    
    
    grains11=createSprite(508,i,5,5);
    grains11.shapeColor="yellow";
     grainsG.add(grains11);
    
    grains12=createSprite(558,i,5,5);
     grains12.shapeColor="yellow";
    grainsG.add(grains12);
    
    grainsG.setDepthEach(wallsGroup.minDepth()-1);
  }
    
  

  
  
  }
function reset(){
  lives=4;
 sofia.visible=true;
  cup.visible=true;
   createWalls();
  createMonsters();
  createGrains();
  playS.play();
playS.setVolume(0.2);
playS.loop();
  
  
  r.visible=false;

gameState=PLAY;
  
}