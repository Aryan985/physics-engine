const Engine = Matter.Engine 
const World = Matter.World
 const Bodies = Matter.Bodies
  var engine, world, object;
   function setup() { 
     createCanvas(400,400); 
     engine = Engine.create();
      world = engine.world;
       var object_property = {
          isStatic: true
        
      }
       ground = Bodies.rectangle(200,390,400,20,object_property) 
       World.add(world,ground)
       var ball_property = {
        restitution:1
      
    }
     ball = Bodies.circle(200,100,20,ball_property) ;
     World.add(world,ball)
       
       }
         function draw() {
            background("orange");
             Engine.update(engine);
              rectMode(CENTER)
              ellipseMode(RADIUS);
              rect(ground.position.x,ground.position.y,400,20) 
              ellipse(ball.position.x,ball.position.y,20);
              }