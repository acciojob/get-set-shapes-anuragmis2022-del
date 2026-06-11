//complete this code
class Rectangle {
	constructor(width, height)
	{
		this.width=w
		this.height=h
	}
	get width()
	{
		return this.width
	}
	het height()
	{
		return this.height
	}
getArea()
	{
		let area=this.width*this.height
		return area 
	}
}

class Square extends Rectangle {
	constructor(width, height, side )
	{
		super(width, height)
		this.side=side
	}
	getperimeter()
	{
		let peri= 4*this.side
	}
		
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;




























