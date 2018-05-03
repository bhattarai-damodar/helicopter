

document.addEventListener("DOMContentLoaded", myLoad);

function myLoad(){
	var circle = document.getElementById('circle');
	circle.addEventListener('click', button123);
	circle.style.opacity='1';
}


function button123(){
	setInterval(changeOpacity,1000);
	

	
}
function changeOpacity(){
	var circle = document.getElementById('circle');
	
	var copacity= parseFloat(circle.style.opacity);
	circle.style.opacity=copacity-0.2;
}
