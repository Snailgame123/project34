class Monster{
    constructor(x,y){
        var options={
            density:0.5
            
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 40;
        this.height = 40;
        this.image=loadImage("monster.png")
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
        image(this.image,0, 0, 400, 400);
        pop()
    }
    
}