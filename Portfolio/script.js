let gridItemList = document.querySelectorAll('.grid-item');
let display      = document.querySelector('#image-display');
let navbar       = document.querySelector('#navbar');
let body         = document.querySelector('body');
let face         = document.querySelector('.symbol');

// adding mouseover event that changes tghe oopacity
//  adding a class that is specified in css files
function appear(){
	for (let x of gridItemList){
		x.classList.toggle('appear');
	}
}

for(let i of gridItemList){
	// simple mouse over event, to lower opacity
	i.addEventListener("mouseover",function(){
		console.log('over');
		i.classList.toggle("mouse-over-image");
	})
	// mouseout event to return the opacity to 1
	i.addEventListener("mouseout",function(){
		console.log('out');
		i.classList.toggle("mouse-over-image");	
	})

	// click event to make other elements disappear,
	// only to be returned when delbtn is clicked!

	i.addEventListener("click",function(){
		console.log('click');
		appear();

		let newDiv  = document.createElement('div');
		let delBtn  = document.createElement('p');
		let infoDiv = document.createElement('div');

		newDiv.style.backgroundImage = getComputedStyle(i, null).backgroundImage;
		if(i.id === "image-1" || i.id === "image-5"){
			newDiv.classList.add('display-new-thin');

		}else if(i.id ==="image-3"){
			newDiv.classList.add('display-new-wide');
			newDiv.style.left = '15vw';
		}else{
			newDiv.classList.add('display-new-wide');
		}

		delBtn.textContent = 'X';
		delBtn.classList.add('delete');

		infoDiv.textContent = 'this is some information about this painting!';
		infoDiv.style.color = 'black';

		delBtn.addEventListener('click',function(){
			appear();
			newDiv.parentNode.removeChild(newDiv);
			infoDiv.parentNode.removeChild(infoDiv);
		})

		newDiv.append(delBtn)
		display.append(infoDiv,newDiv);
	})
}

// on scrolling certain distance change the location of the navbar to top

function scrollFunc() {
	if (document.documentElement.scrollTop >= 1600) {
		navbar.id = "changed-navbar";
	}else{
		navbar.id = 'navbar';
	}
  	console.log(document.documentElement.scrollTop);
}

window.addEventListener('scroll',scrollFunc);


// when hovering the face new div appears that lets you play a game

let textDiv         = document.createElement('div');
textDiv.textContent = 'Wanna play a game? Click the face!';
textDiv.classList.add('textDiv-style');

face.addEventListener('mouseover',function(){
	face.append(textDiv);	
})

face.addEventListener('mouseout',function(){
	console.log('out');
	face.removeChild(textDiv);
})