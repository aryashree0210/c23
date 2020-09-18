class Box{
    constructor(x,y,width,height){
        //used to initialize properties

        var options = {
           restitution: 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        //(200,200,50,50)
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        console.log(this.body);
    }


    display(){
       var pos =  this.body.position;
       var angle = this.body.angle;
        //push or save all the things i didi till now 

        push();


        translate(pos.x,pos.y);

        rotate(angle);



       rectMode(CENTER);
       fill("white");
       rect(0,0,this.w,this.h);

       //revert it back to previous settings
       pop();

    }








}