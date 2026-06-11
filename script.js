//complete this code
class Rectangle {
	constructor(width, height)
	{
		this.width=width
		this.height=height
	}
	get width()
	{
		return this._width
	}
		get height()
	{
		return this._height
	}
getArea()
	{
		let area=this.width*this.height
		return area 
	}
}

class Square extends Rectangle {
	constructor(side )
	{
		super(side,side)
		
	}
	square.getPerimeter()
	{
		let peri= 4*this.side
		return peri
	}
		
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;




























