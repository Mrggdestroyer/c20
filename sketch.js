var cat, catStill, catRunning, catCollide;
var mouse, mouseStill, mouseAni, mouseCollide;
var garden, gardenImg;

function preload() {
    //load the images here
    catRunning = loadAnimation("cat2.png", "cat3.png");
    catStill = loadImage("cat1.png");
    catCollide = loadImage("cat4.png");

    mouseAni = loadAnimation("mouse2.png","mouse3.png");
    mouseStill = loadImage("mouse4.png");
    mouseCollide = loadImage("mouse1.png");

    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    cat = createSprite(900,650,20,20);
    cat.addImage("catSit", catStill);
    cat.scale = 0.2;

    mouse = createSprite(75,650,20,20);
    mouse.addImage("mouseSit", mouseStill);
    mouse.scale = 0.2;
    mouse.frameDelay=25;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

    

    if (cat.x - mouse.x <cat.width/2 - mouse.width/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("catHappy", catCollide);
        cat.changeAnimation("catHappy");
        cat.x = 250;

        mouse.addAnimation("mouseHappy", mouseCollide)
        mouse.changeAnimation("mouseHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode == 32)
  {
    cat.velocityX = -5;
    cat.addAnimation("catChase", catRunning);
    cat.changeAnimation("catChase");

    mouse.addAnimation("mouseMoving", mouseAni);
    mouse.changeAnimation("mouseMoving");
  }


} 
