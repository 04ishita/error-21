class ground{

constructor(x,y,w,h){
let options = {
    isStatic: true
};
this.body = bodies.rectangle(x,y,w,h,options)
this.w = w ;
this.h = h;
world.add(world,this.body);
}


display(){
pos =this.body.x.position 
Push()
rectmode(CENTER)
Fill(133)
rect(pos.x,pos.y,this.w,this.h);
}





}


