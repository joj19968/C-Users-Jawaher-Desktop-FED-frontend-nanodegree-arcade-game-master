
// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
	constructor(x,y){
		this.sprite = 'images/enemy-bug.png';
		this.x=x;
		this.y=y;
		// to make the speed random 
		this.velocity = 100 + (Math.random() * 100); // will be between 100 and 200
		//this.velocity=0; // to put a circle on the bugs
	}
	
	
	update(delta){
		//to make an insect moves and parametr delta to  determine the speed 
		this.x+=this.velocity*delta;
		//to meak an insect appear again 
		if(this.x>ctx.canvas.width +50){
			this.x=-100;
			
		}
		
	}
	
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100);
		//draw a circle tha her center is like insects center 
				ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
				ctx.beginPath();
				ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
				ctx.fill();
	}
};


