class Circle {
constructor(x,y,r){
var options = {
isStatic:false,
restitution:0.3,
friction:0.1,
density:1.2

}
//Bodies.circle(this.x,this.y,(this.r-20)/2,options)
this.x = x
this.y = y
this.r = r
this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
this.image = loadImage("paper.png")
World.add(world,this.body)
}
display(){
var rubberpos=this.body.position
push()
translate(rubberpos.x,rubberpos.y)
imageMode(CENTER);
 image(this.image,0,0,this.r,this.r);
pop()
}
}

