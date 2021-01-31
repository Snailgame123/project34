class Chain{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.5,
            length:250
        }
        this.pointB=point2
        this.chain=Constraint.create(options);
        World.add(world,this.chain)

    }
    display(){
        var pointA=this.chain.bodyA.position
        strokeWeight(0);
        stroke("black")
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)

    }

}