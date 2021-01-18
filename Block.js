class Block extends BaseClass {
  constructor(x,y,width,height) 
  {
    super(x,y,width,height);
    this.Visibility = 255
  }
 

  // ****** WROTE NEW DISPLAY FUNCTION TO CHANGE THE IMAGE FUNCTION TO RECT FUNCTION ON LINE 16
  // SINCE OUR CODE DOES NOT HAVE IMAGES FOR THE BLOCKS ******
  
  display(){
    if(this.body.speed<3)
    {
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      push();
      this.Visbility = this.Visibility - 5;
      tint(255,this.Visibility)
      rect(999,999,this.width,this.height);
      pop();
    }
    
  }
}
function score()
{
  if(this.Visibility<0 && this.Visibility >-105)
  {
    score++
  }
}
