function changePuzzle() {
	var rnd_idx = Math.trunc(Math.random()*3)
	if (rnd_idx==0){
		showPuzzleOne()
	}
	else if (rnd_idx==1){
		showPuzzleTwo()
	}
	else {
		showPuzzleThree()
	}
}

function showPuzzleOne() {
	var bPiece1 = document.getElementById('piece2-1')
	var bPiece2 = document.getElementById('piece2-2')
	var bPiece3 = document.getElementById('piece2-3')
	var bPiece4 = document.getElementById('piece2-4')
	var bPiece5 = document.getElementById('piece2-5')
	var bPiece6 = document.getElementById('piece2-6')
	var bPiece7 = document.getElementById('piece2-7')
	var bPiece8 = document.getElementById('piece2-8')
	var bPiece9 = document.getElementById('piece2-9')
	var bPiece10 = document.getElementById('piece2-10')
	var bPiece11 = document.getElementById('piece2-11')
	var bPiece12 = document.getElementById('piece2-12')
	bPiece1.style.display="none"
	bPiece2.style.display="none"
	bPiece3.style.display="none"
	bPiece4.style.display="none"
	bPiece5.style.display="none"
	bPiece6.style.display="none"
	bPiece7.style.display="none"
	bPiece8.style.display="none"
	bPiece9.style.display="none"
	bPiece10.style.display="none"
	bPiece11.style.display="none"
	bPiece12.style.display="none"

	var cPiece1 = document.getElementById('piece3-1')
	var cPiece2 = document.getElementById('piece3-2')
	var cPiece3 = document.getElementById('piece3-3')
	var cPiece4 = document.getElementById('piece3-4')
	var cPiece5 = document.getElementById('piece3-5')
	var cPiece6 = document.getElementById('piece3-6')
	var cPiece7 = document.getElementById('piece3-7')
	var cPiece8 = document.getElementById('piece3-8')
	var cPiece9 = document.getElementById('piece3-9')
	var cPiece10 = document.getElementById('piece3-10')
	var cPiece11 = document.getElementById('piece3-11')
	var cPiece12 = document.getElementById('piece3-12')
	cPiece1.style.display="none"
	cPiece2.style.display="none"
	cPiece3.style.display="none"
	cPiece4.style.display="none"
	cPiece5.style.display="none"
	cPiece6.style.display="none"
	cPiece7.style.display="none"
	cPiece8.style.display="none"
	cPiece9.style.display="none"
	cPiece10.style.display="none"
	cPiece11.style.display="none"
	cPiece12.style.display="none"

	var aPiece1 = document.getElementById('piece1-1')
	var aPiece2 = document.getElementById('piece1-2')
	var aPiece3 = document.getElementById('piece1-3')
	var aPiece4 = document.getElementById('piece1-4')
	var aPiece5 = document.getElementById('piece1-5')
	var aPiece6 = document.getElementById('piece1-6')
	var aPiece7 = document.getElementById('piece1-7')
	var aPiece8 = document.getElementById('piece1-8')
	var aPiece9 = document.getElementById('piece1-9')
	var aPiece10 = document.getElementById('piece1-10')
	var aPiece11 = document.getElementById('piece1-11')
	var aPiece12 = document.getElementById('piece1-12')
	const puzzleOneArray = [aPiece1,aPiece2,aPiece3,aPiece4,aPiece5,aPiece6,aPiece7,aPiece8,aPiece9,aPiece10,aPiece11,aPiece12]
	const puzzleIds = ['piece1-1','piece2-1','piece1-3','piece1-4','piece1-5','piece1-6','piece1-7','piece1-8','piece1-9','piece1-10','piece1-11','piece1-12']
	/*var topPositions = ["400px","525px"]
	var leftPositions = ["50px","175px","300px","425px","550px","675px"]*/
}

function showPuzzleTwo() {
	var aPiece1 = document.getElementById('piece1-1')
	var aPiece2 = document.getElementById('piece1-2')
	var aPiece3 = document.getElementById('piece1-3')
	var aPiece4 = document.getElementById('piece1-4')
	var aPiece5 = document.getElementById('piece1-5')
	var aPiece6 = document.getElementById('piece1-6')
	var aPiece7 = document.getElementById('piece1-7')
	var aPiece8 = document.getElementById('piece1-8')
	var aPiece9 = document.getElementById('piece1-9')
	var aPiece10 = document.getElementById('piece1-10')
	var aPiece11 = document.getElementById('piece1-11')
	var aPiece12 = document.getElementById('piece1-12')

	aPiece1.style.display="none"
	aPiece2.style.display="none"
	aPiece3.style.display="none"
	aPiece4.style.display="none"
	aPiece5.style.display="none"
	aPiece6.style.display="none"
	aPiece7.style.display="none"
	aPiece8.style.display="none"
	aPiece9.style.display="none"
	aPiece10.style.display="none"
	aPiece11.style.display="none"
	aPiece12.style.display="none"

	var cPiece1 = document.getElementById('piece3-1')
	var cPiece2 = document.getElementById('piece3-2')
	var cPiece3 = document.getElementById('piece3-3')
	var cPiece4 = document.getElementById('piece3-4')
	var cPiece5 = document.getElementById('piece3-5')
	var cPiece6 = document.getElementById('piece3-6')
	var cPiece7 = document.getElementById('piece3-7')
	var cPiece8 = document.getElementById('piece3-8')
	var cPiece9 = document.getElementById('piece3-9')
	var cPiece10 = document.getElementById('piece3-10')
	var cPiece11 = document.getElementById('piece3-11')
	var cPiece12 = document.getElementById('piece3-12')

	cPiece1.style.display="none"
	cPiece2.style.display="none"
	cPiece3.style.display="none"
	cPiece4.style.display="none"
	cPiece5.style.display="none"
	cPiece6.style.display="none"
	cPiece7.style.display="none"
	cPiece8.style.display="none"
	cPiece9.style.display="none"
	cPiece10.style.display="none"
	cPiece11.style.display="none"
	cPiece12.style.display="none"
}

function showPuzzleThree() {
	var aPiece1 = document.getElementById('piece1-1')
	var aPiece2 = document.getElementById('piece1-2')
	var aPiece3 = document.getElementById('piece1-3')
	var aPiece4 = document.getElementById('piece1-4')
	var aPiece5 = document.getElementById('piece1-5')
	var aPiece6 = document.getElementById('piece1-6')
	var aPiece7 = document.getElementById('piece1-7')
	var aPiece8 = document.getElementById('piece1-8')
	var aPiece9 = document.getElementById('piece1-9')
	var aPiece10 = document.getElementById('piece1-10')
	var aPiece11 = document.getElementById('piece1-11')
	var aPiece12 = document.getElementById('piece1-12')

	aPiece1.style.display="none"
	aPiece2.style.display="none"
	aPiece3.style.display="none"
	aPiece4.style.display="none"
	aPiece5.style.display="none"
	aPiece6.style.display="none"
	aPiece7.style.display="none"
	aPiece8.style.display="none"
	aPiece9.style.display="none"
	aPiece10.style.display="none"
	aPiece11.style.display="none"
	aPiece12.style.display="none"

	var bPiece1 = document.getElementById('piece2-1')
	var bPiece2 = document.getElementById('piece2-2')
	var bPiece3 = document.getElementById('piece2-3')
	var bPiece4 = document.getElementById('piece2-4')
	var bPiece5 = document.getElementById('piece2-5')
	var bPiece6 = document.getElementById('piece2-6')
	var bPiece7 = document.getElementById('piece2-7')
	var bPiece8 = document.getElementById('piece2-8')
	var bPiece9 = document.getElementById('piece2-9')
	var bPiece10 = document.getElementById('piece2-10')
	var bPiece11 = document.getElementById('piece2-11')
	var bPiece12 = document.getElementById('piece2-12')

	bPiece1.style.display="none"
	bPiece2.style.display="none"
	bPiece3.style.display="none"
	bPiece4.style.display="none"
	bPiece5.style.display="none"
	bPiece6.style.display="none"
	bPiece7.style.display="none"
	bPiece8.style.display="none"
	bPiece9.style.display="none"
	bPiece10.style.display="none"
	bPiece11.style.display="none"
	bPiece12.style.display="none"
}

function grabber(event) {
	//Set the global variable for the element to be moved
	theElement = event.currentTarget;

	//Determine position of image to be grabbed, first removing units from left and top
	posX = parseInt(theElement.style.left);
	posY = parseInt(theElement.style.top);

	//compute difference between where it is and where the mouse click occurs
	diffX = event.clientX - posX;
	diffY = event.clientY - posY;

	//register the event handlers for moving and dropping the word
	document.addEventListener("mousemove",mover,true);
	document.addEventListener("mouseup",dropper,true);
}

//the event handler function for moving the word
function mover(event) {
	//compute the new position, add units, and move the word
	theElement.style.left = (event.clientX - diffX) + "px";
	theElement.style.top = (event.clientY - diffY) + "px";
}

//the event handler function for dropping the word
function dropper(event) {
	//unregister the event handlers for mouseup and mousemove
	document.removeEventListener("mouseup",dropper,true);
	document.removeEventListener("mousemove",mover,true);
}