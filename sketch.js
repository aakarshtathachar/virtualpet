//Create variables here

var dog;
var happyDog;
var database;
var foods
var foodStock;

function preload()
{
happyDog = loadImage("images/dogImg1.png")
dogimg = loadImage("images/dogImg.png")
  
	//load images here
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,300,150,150)
  dog.addImage(dogimg);
  dog.scale=0.1;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }


  drawSprites();
  //add styles here
  fill(255)
  text("foods remaining"+foods,170,200)
  textSize(13);

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1
}

  database.ref('/').update({
Food:x
  })
}



