var play=1
var end=-1
var gmst=1
var monkey , monkey_running,groud;
var banana ,bananaImage, obstacle, obstacleImage;
var foodg, obstacleg,ground;
var score=0;
var survivaltime=0

function preload(){
  
  gmov=loadImage("sdfghjk.jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bg=loadImage("de.jpg")
  banana1 = loadImage("banana.png");
  obstace = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(windowWidth,windowHeight)
  monkey=createSprite(70,330,1,1)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.2
  //monkey.collide("ground")
  //monkey.debug=true
  
 ground=createSprite(windowWidth,windowHeight,900,10)
  //ground.velocityX=-4
  ground.x=ground.width/2
  //console.log(ground.x)
  ground.visible=false
  
 

  foodg=new Group()
  obstacleg=new Group()
  
}


function draw() {
 

  if(gmst===play){
    background(bg)
  fruits()
  rock()
  textSize(20)
  stroke("red")
  text("score="+score,20,20)   
     if(keyDown("space")&&monkey.y>=400   ){
   monkey. velocityY=-20
  }
  console.log(monkey.y)
  
    monkey.velocityY=monkey.velocityY+1
    monkey.collide(ground)
  drawSprites()

  if(foodg.isTouching(monkey)){
    score=score+1
    //monkey.scale=monkey.scale+0.1
    foodg.destroyEach()
  }
    
    if (obstacleg.isTouching(monkey)){
  gmst=end
      //monkey.scale=monkey.scale-0.1
    
 }
  }
  
  if(gmst===end){ 
    background(gmov)
  }
}
 


function fruits(){
 
  if(frameCount%60===0){ banana=createSprite(width-100,Math.round(random(height/2-60,height/2)))
  banana.addImage(banana1)
  banana.velocityX=-5
  banana.lifetime=width/2-200
  banana.scale=0.1
   foodg.add(banana)                    }
  
  
}

function rock(){
  if(frameCount%80===0){
    stone=createSprite(width-250,Math.round(random(width/2+140,width/2+139)))
    stone.addImage(obstace)
    stone.velocityX=-5
    stone.lifetime=width/2-200
    stone.scale=0.2
    obstacleg.add(stone)
    
  }
}





