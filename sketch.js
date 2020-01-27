var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
 movingrect= createSprite(400, 200, 90, 50);
 movingrect.shapeColor = "gold";
fixedrect = createSprite(300,500,50,90);
fixedrect.shapeColor = "silver"

movingrect.velocityY = -5;
fixedrect.velocityY= +5;


}

function draw() {
  background(255,255,255);  
bounceoff(movingrect,fixedrect);

  drawSprites();
}


function bounceoff(object1,object2){
  if(object1.x-object2.x < object2.width/2+object1.width/2&&
    object2.x-object1.x< object2.width/2+object1.width/2)
    {
      object1.velocityX = object1.velocityX*(-1);
      object2.velocityX = object2.velocityX*(-1);
    }
   if(object1.y-object2.y< object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2) {
object1.velocityY = object1.velocityY*(-1);
object2.velocityY = object2.velocityY*(-1);

}
}