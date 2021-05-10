var dog, database, food, foodStock;
var dogImg, happyDogImg;
function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
    
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDogImg);
}
  drawSprites();

  textSize(30);
  fill("red");
  text(food, 250, 100);
}

function readStock(data){
  food = data.val();
  //console.log("food:"+ food);
}

function writeStock(x){
if(x<=0){
  x = 0;
}
else{
  x=x-1;
}
  console.log(x);
  database.ref('/').update({Food:x})
}


