// creating container
let container = document.createElement('div');
let main      = document.querySelector('main');

// random integer funciton
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let imageClassList = ['image_1','image_2','image_3','image_4','image_1','image_2','image_3','image_4'];
container.classList.add('container','text-center');

// creating rows
let rowOne   = document.createElement('div');
let rowTwo   = document.createElement('div');

function startgame(){
	let i = 0;
	let copyList = imageClassList;
	// create cards with random classes out of the
	// array of classes making sure we get random draw every game
	while(i < 8){
		console.log('is this thing on?');
		let image     = document.createElement('div');
		let randNum   = randomNumber(0,copyList.length)
		var item      = copyList[randNum];

		copyList.splice(randNum,1);
	 	image.classList.add('col',item);

	 	if(i<4){
	 		rowOne.append(image);
	 	}else{
	 		rowTwo.append(image);
	 	}
		i++;
	}

	let rows     = [rowOne,rowTwo];
	for(let i of rows){
		i.classList.add('row');
		container.append(i);
	}
	main.append(container);
}

startgame();