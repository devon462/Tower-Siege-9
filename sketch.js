
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var slingshot
var stand1,stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var score = 0;

function preload () 
{
    polygon_img = loadImage("sprites/polygon.png");

}

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    ground2 = new Ground(400, 300, 250, 10)
    ground3 = new Ground(900, 230, 300, 10)

    // ****** CODE TO CREATE A POLYGON BODY WITHOUT A CLASS ******
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingshot = new SlingShot(this.polygon, { x: 100, y: 200 });
    //first level
  
    block1 = new Block(300, 275, 30, 40)
    block2 = new Block(330, 275, 30, 40)
    block3 = new Block(360, 275, 30, 40)
    block4 = new Block(390, 275, 30, 40)
    block5 = new Block(420, 275, 30, 40)
    block6 = new Block(450, 275, 30, 40)
    block7 = new Block(480, 275, 30, 40)
    
    //second level
    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    
    //third level
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)

    //top
    block16 = new Block(390,155,30,40)


    //set two 
    //first level
    blocks1 = new Block(840,195,30,40)
    blocks2 = new Block(870,195,30,40)
    blocks3  = new Block(900,195,30,40)
    blocks4 = new Block(930,195,30,40)
    blocks5 = new Block(960,195,30,40)

    //second level
    blocks6 = new Block(870,155,30,40)
    blocks7 = new Block(900,155,30,40)
    blocks8 = new Block(930,155,30,40)


    //third level
    blocks9 = new Block(900,115,30,40)
}

function draw() {
    background("brown")
    Engine.update(engine);
    textSize(30)
    fill("black")
    text("Score:" +score,10,30)
    //strokeWeight(4)
    ground.display();
    ground2.display();
    ground3.display();
    slingshot.display();
    strokeWeight(2);
    stroke(15);
    fill("purple");
    block1.display();
    
    block2.display();
    
    block3.display();
    
    block4.display();
   
    block5.display();
 
    block6.display();

    block7.display(); 
    fill("black")
    block8.display();
    fill("blue")
    block9.display();
    
    block10.display();
   
    block11.display();
    block12.display();
   
    block13.display();
   
    block14.display();

    block15.display();
    
    block16.display();
  fill("red")
    blocks1.display();
  
    blocks2.display();
   
    blocks3.display();
    
    blocks4.display();
  
    blocks5.display();
    
    blocks6.display();
    
    blocks7.display();
    
    blocks8.display();
    
    blocks9.display();
    
    
    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged() {
    Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon);
    }
}


