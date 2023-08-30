var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["30fc7107-8062-4bdd-903b-d29d022631b1","b278fc92-9596-4464-b19f-5bdd5eb505d5","956cd1ca-e0cf-42db-8d3f-bc156fa4d049","4f1b1b82-d4d7-4c92-ae6d-057159102f03","5521f9a3-603b-4daf-9765-f6f00d583002","aea428fc-69da-4689-8f8a-11fc2303cc87"],"propsByKey":{"30fc7107-8062-4bdd-903b-d29d022631b1":{"name":"bomba","sourceUrl":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png","frameSize":{"x":360,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ouSniUdBPmByS9qdf395XpliE0eUsMAm","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ouSniUdBPmByS9qdf395XpliE0eUsMAm/category_video_games/gameplayobject_item_03.png"},"b278fc92-9596-4464-b19f-5bdd5eb505d5":{"name":"planefront_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png","frameSize":{"x":394,"y":154},"frameCount":1,"looping":true,"frameDelay":2,"version":"4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":154},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png"},"956cd1ca-e0cf-42db-8d3f-bc156fa4d049":{"name":"helicopter_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sYPFLoB1TE09j.zX4wGRPIOHfkL0FAoR/category_icons/helicopter.png","frameSize":{"x":382,"y":213},"frameCount":1,"looping":true,"frameDelay":2,"version":"sYPFLoB1TE09j.zX4wGRPIOHfkL0FAoR","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":213},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sYPFLoB1TE09j.zX4wGRPIOHfkL0FAoR/category_icons/helicopter.png"},"4f1b1b82-d4d7-4c92-ae6d-057159102f03":{"name":"hangar1","sourceUrl":"assets/v3/animations/ClFzCjDSy72V5bEVcLI_BTncmF-MZzBh4Bk75pX0bf4/4f1b1b82-d4d7-4c92-ae6d-057159102f03.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"wFDD3ROBtm2PuGanIVzu77Q8M2VLHvs6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/ClFzCjDSy72V5bEVcLI_BTncmF-MZzBh4Bk75pX0bf4/4f1b1b82-d4d7-4c92-ae6d-057159102f03.png"},"5521f9a3-603b-4daf-9765-f6f00d583002":{"name":"oven_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":".h_ZKvpuWqqPbk5TKD9cEzZOUxtzfgA3","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/5521f9a3-603b-4daf-9765-f6f00d583002.png"},"aea428fc-69da-4689-8f8a-11fc2303cc87":{"name":"keyboard_dark_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_49mmD8Cj4Bz8NcilERzZpBTkNCrlBzN/category_school_objects/keyboard_dark.png","frameSize":{"x":129,"y":40},"frameCount":1,"looping":true,"frameDelay":2,"version":"_49mmD8Cj4Bz8NcilERzZpBTkNCrlBzN","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":129,"y":40},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_49mmD8Cj4Bz8NcilERzZpBTkNCrlBzN/category_school_objects/keyboard_dark.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);

goal1.setAnimation("keyboard_dark_1")
goal1.scale=(0.9)
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.setAnimation("keyboard_dark_1")
goal2.shapeColor=("yellow");


// hacer la cancha
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";


// crear objetos y asignarles colores
var striker = createSprite(200,200,10,10);
striker.setAnimation("bomba")
striker.scale=(0.1)
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.setAnimation("planefront_01_1")
playerMallet.scale=(0.2)
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,340,50,10);
computerMallet.scale=(0.2)
computerMallet.setAnimation("helicopter_1")

computerMallet.shapeColor = "black";

// variables de puntuación
var playerScore= 0;
var compScore= 0;
var gameState = "serve"

function draw() {
  // despejar la pantalla
  background("green");
  
  // mostrar las variables compScore  y playerScore
  textSize(18);
  fill("maroon");
  text(playerScore,25,225);
  text(compScore,25,185);
  
  // puntuación
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
  }
     if(striker.isTouching(goal1))
      { // incrementar la puntuación del jugador
        compScore = compScore+1 ;
        //mostrar la cuadrícula para identificar el valor de x e y para mover al delantero al centro
        striker.x=189
        striker.y=186
        striker.velocityX=0;
        striker.velocityY=0;
        reset();
    gameState = "serve";
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore =  + 1;
        // Reiniciar al delantero al agregar el valor central de x e y 
        striker.x=189;
        striker.y=186;
        striker.velocityX=0;
        striker.velocityY=0;
        reset();
    gameState = "serve";
      }
      
   
       //agregar la condición para comprobar si la puntuación de un jugador llega a 5
      if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
    if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }  
      if(gameState === "serve")
      text("presiona espacio para empezar",130,230)
      if (keyDown("space")){
       
        gameState = "play"
      {
        fill("maroon");
        textSize(18);
        
      }
      }
 if(gameState === "play"){
   paddleMovement(keyDown(LEFT_ARROW));
  paddleMovement(keyDown("RIGHT_ARROW"));
   if(playerScore==5  || (compScore==5)){
   gameState = "end"
   }
 }
 if (gameState === "end"){
   text("se termino el juego,presiona espacio para reiniciar")
 }
 
  
  //make the player paddle move with the Arrow keys
  
  
  
  //IA para la paleta de la computadora
  //hacer que se mueva con la posición y del delantero
  computerMallet.x = striker.x;
  

  
  //dibujar la línea al centro
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  
  
  //crear límites de bordes
  //hacer que el delantero rebote con el borde superior e inferior
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  //servir al delantero cuando se presiona la barra espaciadora
  if (keyDown("space")) {
    serve();
  }
  
 }
  drawSprites();
}



























function serve() {
  striker.velocityX = 5;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-5;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+5;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 5;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+5;
   }
  }
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
