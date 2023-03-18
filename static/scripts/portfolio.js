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
	i.addEventListener("click",function(){
		window.open(`/details/${this.id}`);
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