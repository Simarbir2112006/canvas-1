var currentStroke=[]; 
var fullStroke=[];
var blue,red,green;
var pickedColor;
function setup() {
  createCanvas(windowWidth,windowHeight);

  pickedColor = "white";

  colorPicker();
}

function draw() {
  background("black");

  stroke(pickedColor);
  strokeWeight(5);

  //drawing the fullstroke
  for(var f=0; f<fullStroke.length;f++){
    var oldStroke=fullStroke[f];
    //draw the old stroke using the drawStroke
    drawStroke(oldStroke);
  };

  //drawing the curentStroke using the drawStroke function
  drawStroke(currentStroke);

  checkColorPicker();
  drawSprites();
}

function mouseDragged(){
  var position = {
    x:mouseX,
    y:mouseY
  };
  currentStroke.push(position);
  console.log(currentStroke);
}

function mouseReleased(){
  fullStroke.push(currentStroke);
  currentStroke=[];
}

//function to draw the any Stroke
function drawStroke(anyStroke){
  for(var i=0; i < anyStroke.length-1; i++ ){
    line (anyStroke[i].x, anyStroke[i].y, anyStroke[i+1].x, anyStroke[i+1].y);
  }
  
}

function colorPicker(){
  blue = createSprite(windowWidth-100,100,30,30);
  blue.shapeColor="blue";

  red = createSprite(windowWidth-100,300,30,30);
  red.shapeColor="red"

  green = createSprite(windowWidth-100,500,30,30);
  green.shapeColor="green"
}

function checkColorPicker(){
  if(mousePressedOver(blue)){
    pickedColor = "blue";
  }

  if(mousePressedOver(red)){
    pickedColor = "red";
  }

  if(mousePressedOver(green)){
    pickedColor = "green";
  }
}

