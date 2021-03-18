class Bob  {
    constructor(x,y){  
    var options = {
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.body = Bodies.circle(x, y, 35,options);
World.add(world, this.body);
}
display() {
    fill("red");
    ellipse(this.body.position.x,this.body.position.y,70,70);
}
}

