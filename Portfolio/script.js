let gridItemList = document.querySelectorAll('.grid-item');
// adding mouseover event that changes tghe oopacity
// - adding a class that is specified in css files

for(let i of gridItemList){
	i.addEventListener("mouseover",function(){
		console.log('over');
		i.classList.toggle("mouse-over-image");
	})
	// adding click event that adds class and changes display
	// of other elements, clicking again returns to normal 
	i.addEventListener("click",function(){
		console.log('click');
		i.classList.add('clicked');
		
		for(let x of gridItemList){
			if(x.classList.toString().includes("clicked")){
				x.addEventListener('click',function(){
					this.classList.toggle('clicked');
					for (let z of gridItemList){
						z.style.display = 'inline-block';
					}
				})
			}else{
				x.style.display = 'none';
			}
		}
		let exitBtn = document.createElement('p');
		exitBtn.textContent = "X"
		exitBtn.classList.add = 'del';

		// document.querySelector("#image-display").append
	})

	i.addEventListener("mouseout",function(){
		console.log('out');
		i.classList.toggle("mouse-over-image");	
	})
}
