class Ball{
    constructor(x,y){
        var options={
            density:0.5,
            frictionAir:0.5
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        this.image=loadImage("hero1.png")
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill("red");
        strokeWeight(4);
        image(this.image,0, 0, 400, 200);
        pop()
    }
    
}