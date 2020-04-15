
class Player {
		constructor(x,y){
		this.sprite = 'images/char-boy.png';// to showe the player
		this.startOver();
		}
		
		
	update(){

	}
	startOver(){
		//to start the game again after player dies
		this.x=250;
		this.y=400; 
	}
	cloidedWidthEnemy(){
		//console.log('player died');
		this.startOver();
	}
	
	render(){
				ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100); //put the image on canvas 
				// to know the radius where collision happened
				//ctx.drawCircle(this.x,this.y,100);
				//draw a circle tha her center is like player center 
				ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
				ctx.beginPath();
				ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
				ctx.fill();

	}
	handleInput(direction){
		//console.log(direction);
		//use if condition to manage the player so he cannot go outside the screen
		switch(direction){
			case "right":
			if(this.x<450){
			this.x+=100;
			break;}
			
			case "left":
			if(this.x>50){
			this.x-=100;
			break;}
			
			case "up":
			if(this.y>100){
			this.y-=82;
			break;}
			
			case "down":
			if(this.y<500){
			this.y+=82;
			break;}
			
			default:
			break;
		}
	}
}
