function gridInitialization(){
	const grid=document.querySelector('#grid-container');

	for(let i=0;i<16*16;i++){
		let square=document.createElement('div');
		square.setAttribute('id','square');
		square.style.borderBottom='1px dotted lightgrey';
		square.style.borderRight='1px dotted lightgrey';
		grid.appendChild(square);
	}

	let squares=document.querySelectorAll('#square');
	squares.forEach((square)=>{
		square.addEventListener('mouseenter',changeColor);
	})
}

gridInitialization();

const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',clearGrid)

function clearGrid(){
	let allSquares=document.querySelectorAll('#square');
	allSquares.forEach((square)=>{
		square.style.backgroundColor='whitesmoke';
		square.style.borderBottom='1px dotted lightgrey';
		square.style.borderRight='1px dotted lightgrey';
		square.classList.remove('colored');
	})
}

const gridSizeButton=document.querySelector('#grid-size');
gridSizeButton.addEventListener('click',changeGridSize);

function changeGridSize(){
	const grid=document.querySelector('#grid-container');
	let newSize;
	do{
		newSize=prompt('Enter new grid size (for a 10x10 grid, enter 10)');
	}while(isNaN(newSize) || newSize%1!=0 || newSize<=0);

	grid.querySelectorAll('*').forEach(square=>square.remove());

	grid.style.gridTemplateColumns='repeat('+newSize+',1fr)';
	grid.style.gridTemplateRows='repeat('+newSize+',1fr)';

	for(let i=0;i<newSize*newSize;i++){
		let square=document.createElement('div');
		square.setAttribute('id','square');
		square.style.borderBottom='1px dotted grey';
		square.style.borderRight='1px dotted grey';
		grid.appendChild(square);
	}

	let squares=document.querySelectorAll('#square');
	squares.forEach((square)=>{
		square.addEventListener('mouseenter',changeColor);
	})
}

function changeColor(){
	if(!this.classList.contains('colored')){
		let red=Math.floor(Math.random()*256);
		let green=Math.floor(Math.random()*256);
		let blue=Math.floor(Math.random()*256);
		this.style.backgroundColor='rgb('+red+','+green+','+blue+')';
		this.style.border='none';
		this.classList.add('colored');
	}else{
		let rgb=this.style.backgroundColor.split(',');
		let red=rgb[0].split('(')[1];
		let green=rgb[1].split(' ')[1];
		let blue=rgb[2].trim().slice(0,-1);
		this.style.backgroundColor='rgb('+red*0.7+','+green*0.7+','+blue*0.7+')';
	}
}

const toggleBorder=document.querySelector('#border');
toggleBorder.addEventListener('click',()=>{
	let squares=document.querySelectorAll('#square');
	squares.forEach((square)=>{
		if(square.style.border!='none'){
			square.style.border='none';
		}else{
			if(square.classList.contains('colored')) return;
			else{
				square.style.borderBottom='1px dotted lightgrey';
				square.style.borderRight='1px dotted lightgrey';
			}
		}
	})
})