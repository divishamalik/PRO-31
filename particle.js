class Particle{
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic:false
            
        }
        this.body=Bodies.circle(x,y,10,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //rotate(this.body.angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,20,20);
        pop();
    }
}