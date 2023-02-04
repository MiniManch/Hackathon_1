let gridItemList = document.querySelectorAll('.grid-item');
let display      = document.querySelector('#image-display');
// adding mouseover event that changes tghe oopacity
// - adding a class that is specified in css files

function appear(){
	for (let x of gridItemList){
		x.classList.toggle('appear');
	}
}


for(let i of gridItemList){
	i.addEventListener("mouseover",function(){
		console.log('over');
		i.classList.toggle("mouse-over-image");
	})

	// i.addEventListener("click",function(){
	// 	console.log('click');
	// 	console.log('this',this);
	// 	this.classList.add('clicked');

	// 	let newArr = [];
	// 	for (let y of gridItemList){
	// 		if (!(y.classList.toString().includes("clicked"))){
	// 			newArr.push(y);
	// 		}else{
	// 			y.addEventListener('click',function(){
	// 				y.classList.toggle('clicked');
	// 			})
	// 		}
	// 	}
	// 	console.log(newArr);
	// 	for(let x of newArr){
	// 		x.classList.toggle('appear');
	// 	}

	// })

	i.addEventListener("click",function(){
		console.log('click');
		appear();

		let newDiv = document.createElement('div');
		let delBtn = document.createElement('p');

		newDiv.style.backgroundImage = getComputedStyle(i, null).backgroundImage;
		newDiv.classList.add('display-new');

		delBtn.textContent = 'X';
		delBtn.style.color = 'black';

		delBtn.addEventListener('click',function(){
			appear();
			newDiv.parentNode.removeChild(newDiv);
		})
		// newDiv.addEventListener('click',fu)
		newDiv.append(delBtn)
		display.append(newDiv);


	})

	i.addEventListener("mouseout",function(){
		console.log('out');
		i.classList.toggle("mouse-over-image");	
	})
}
