class Rope{
    constructor(body1,body2,offfsetX,offfsetY){
        this.offfsetX=offfsetX;
        this.offfsetY=offfsetY;
        var options ={
            bodyA:body1,
            bodyB:body2,
           pointB:{x:this.offfsetX, y:offfsetY}
        }
        this.rope=Constraint.create(options);
        World.add (world,this.rope);
}
    display(){
        var pointA =this.rope.bodyA.position;
        var pointB =this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

}
    

}