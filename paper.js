class paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
		this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
        var posRight = this.body.position;
        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        //rotate(-1*this.angle)
        image(this.image, 0,0,50,50);
        pop()
			
	}

}