let allEnemies = []; //array to hold enemies





//define player
let player = new Player();





// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
function creatEnemeis(){
let Enemy1=new Enemy(100 , 150 );
let Enemy2=new Enemy(100 , 230 );
let Enemy3=new Enemy(100 , 330 );
allEnemies.push(Enemy1);
allEnemies.push(Enemy2);
allEnemies.push(Enemy3);
}
function checkCollisions(){
	allEnemies.forEach(bug =>{
		if(Math.abs(bug.x-player.x)<50 && Math.abs(bug.y-player.y)<50){
			player.cloidedWidthEnemy();
		}
	})
	Win();
}
 
 function Win(){
	
      if(player.y<=72){
	              //player.startOver();
	              //console.log('win');
				  alert('you winning');
             }
                    } 
					
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
creatEnemeis();
