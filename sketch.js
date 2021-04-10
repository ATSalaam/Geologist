const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var rubberBall;
var largeRock,medRock, smallRock;
var bigIron, smallIron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubberBall = new Rubber(50,40,60);

    largeRock = new Stone(100,100);
    medRock = new Stone(150,60);
    smallRock = new Stone(170,130);

    bigIron = new Iron(100,200);
    smallIron = new Iron(200,90);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubberBall.display();

    largeRock.display();
    medRock.display();
    smallRock.display();

    bigIron.display();
    smallIron.display();
    
 
}
