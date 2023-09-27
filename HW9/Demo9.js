var i = 0 //start point
var images = []

//image list
images[0] = 'agra_fort.jpeg'
images[1] = 'ajanta_ellora.jpeg'
images[2] = 'akshardham_temple.jpeg'
images[3] = 'gateway_of_india.jpeg'
images[4] = 'hawa_mahal.jpeg'
images[5] = 'mehrangarh_fort.jpeg'
images[6] = 'mysore_palace.jpeg'
images[7] = 'qutub_minar.jpeg'
images[8] = 'sun_temple.jpeg'
images[9] = 'taj_mahal.jpeg'
images[10] = 'victoria_memorial.jpeg'

//change image
function changeImg(){
	document.slide.src = images[i]

	if(i<images.length - 1){
		i++
	}
	else {
		i=0
	}

	Timer_Started = true
	myTimeout = setTimeout("changeImg()",3000)
}

window.onload = changeImg

function startLock(){
	if(Timer_Started === true){
		

	}
	else {
		changeImg()
	}
}

function stopImg(){
	Timer_Started = false
	clearTimeout(myTimeout)

}