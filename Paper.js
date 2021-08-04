class Paper {
	constructor(x,y) {
	var options = {
        isStatic:false,
		'density':0.3,
		'friction': 0,
		'restitution':1.2

        
	}
        


        this.x=x;
		this.y=y;
		this.paperWidth=100;
		this.paperHeight=100;
		this.wallThickness=20;
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.paperWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.paperWidth/2, this.y-this.paperHeight/2, this.wallThickness, this.paperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

        function keyPressed(){
            if (KeyCode === UP_ARROW){

                Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});


            }
        }

        
	}

	
	display()
	{
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;

        

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER) 
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle)
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        pop()

        
        push()
        translate(posBottom.x, posBottom.y+10);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        imageMode(CENTER);
        image(this.image, 0,-this.paperHeight/2,this.paperWidth, this.paperHeight)
        pop()
        
}

}

