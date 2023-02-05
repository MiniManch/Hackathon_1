// creating container
// let container = document.createElement('div');
// let main      = document.querySelector('main');
let startBtn  = document.querySelector('button');

let body      = document.querySelector('body');
// random integer funciton
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// // creating rows
// let rowOne   = document.createElement('div');
// let rowTwo   = document.createElement('div');

function startgame(){
	// creating container
	let container = document.createElement('div');
	container.classList.add('container','text-center','del');
	
	let main      = document.createElement('main');
	main.classList.add('del');
	body.append(main);
	
	let startBtn  = document.querySelector('button');
	// creating rows
	let rowOne   = document.createElement('div');
	let rowTwo   = document.createElement('div');
	
	let i = 0;
	let imageClassList = ['image_1','image_2','image_3','image_4','image_1','image_2','image_3','image_4'];
	let copyList = imageClassList;
	console.log('list',copyList);
	// create cards with random classes out of the
	// array of classes making sure we get random draw every game
	while(i < 8){
		let image     = document.createElement('div');
		let randNum   = randomNumber(0,copyList.length)
		var item      = copyList[randNum];

		// Adding classes that contain style, also hidden class for the game
		copyList.splice(randNum,1);
	 	image.classList.add('col',item , 'hidden','del');
	 	image.id = `image_${i}`;
	 	if(i<4){
	 		rowOne.append(image);
	 	}else{
	 		rowTwo.append(image);
	 	}
		i++;
	}
	// appending into rows  and then tothe container and the main 
	let rows     = [rowOne,rowTwo];
	for(let i of rows){
		i.classList.add('row','del');
		console.log(i);
		container.append(i);
	}
	main.append(container);
}


function guess(){
	let selectedGuess = [];
	let num = 0;
	// adding event listener so we can click and it shows;
	let imageList = document.querySelectorAll('.hidden');
	for (let i of imageList){
		console.log(i);
		i.addEventListener('click',function(){
			i.classList.remove('hidden');
			selectedGuess.push(i);
			if(selectedGuess.length === 2){
				if(selectedGuess[0].classList[1] === selectedGuess[1].classList[1] && selectedGuess[0].id != selectedGuess[1].id){
					alert('correct guess');
					selectedGuess = [];
					num ++;
				}else if(num === 10){
					return gameOver();
				}else{
					let imageList = document.querySelectorAll('.hidden');
					for(let x of imageList){
						x.classList.add('hidden');
					}
					for(let x of selectedGuess){
						x.classList.add('hidden');
					}
					selectedGuess = [];
					alert('wrong!');
					num ++;
				}
			}
		})
	}
}

function gameOver(){
	alert('game over! you ran out of guesses!');
	for(let i of document.querySelectorAll('.col')){
		removeEventListener('click',i);
	}
}

function actualGame(){
	let delList = document.querySelectorAll('.del');
	for(let i of delList){
		i.parentNode.removeChild(i);
	}
	startgame();
	guess();
}

startBtn.addEventListener('click',actualGame);

actualGame();