let gridItemList = document.querySelectorAll('.grid-item');
// adding mouseover event that changes tghe oopacity
// - adding a class that is specified in css files

for(let i of gridItemList){
	i.addEventListener("mouseover",function(){
		console.log('over');
		i.classList.toggle("mouse-over-image");
	})

	i.addEventListener("click",function(){
		console.log('click');
		i.classList.toggle('clicked');

		let newArr = [];
		for (let y of gridItemList){
			if (!(y.classList.toString().includes("clicked"))){
				newArr.push(y);
			}else{
				i.classList.toggle('clicked');
			}
		}
		console.log(newArr);
		for(let x of newArr){
			x.classList.toggle('appear');
		}
	})

	i.addEventListener("mouseout",function(){
		console.log('out');
		i.classList.toggle("mouse-over-image");	
	})
}
