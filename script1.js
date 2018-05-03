document.addEventListener("DOMContentLoaded", myLoad);

function myLoad(){
	document.addEventListener('keydown',button)


	// var circle = document.getElementById('circle');
	// circle.addEventListener('click', button);

}
var interval=0;
function button(event){
clearInterval(interval);

	
	if(event.keyCode==37){
	interval = setInterval(moveLeft, 10);
}
	if(event.keyCode==39){
	interval= setInterval(moveRight, 10);
}
	if(event.keyCode==38){
	interval= setInterval(moveTop, 10);

	}
	if(event.keyCode==40){
	interval= setInterval(moveDown, 10);
	}
		
}
function moveLeft(){
	var circle = document.getElementById('circle');
	currentLeft = circle.offsetLeft;
	circle.style.left = currentLeft - 3 + 'px';
}
function moveRight(){
	var circle = document.getElementById('circle');
	currentLeft = circle.offsetLeft;
	circle.style.left = currentLeft + 3 + 'px';
}
function moveTop(){
	var circle = document.getElementById('circle');
	currentTop = circle.offsetTop;
	circle.style.top = currentTop - 3 + 'px';
}
function moveDown(){
	var circle = document.getElementById('circle');
	currentTop = circle.offsetTop;
	circle.style.top = currentTop + 3 + 'px';
}