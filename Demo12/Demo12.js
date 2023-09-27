function disableBox() {
	var box1 = document.getElementById("box1")
	var box2 = document.getElementById("box2")
	var box3 = document.getElementById("box3")
	var box4 = document.getElementById("box4")
	var box5 = document.getElementById("box5")
	var box6 = document.getElementById("box6")
	var box7 = document.getElementById("box7")
	var box8 = document.getElementById("box8")
	var box9 = document.getElementById("box9")
	var box10 = document.getElementById("box10")

	const textBoxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10]
	
	for (let i=0;i<textBoxes.length;i++) {
		if (textBoxes[i].value!="") {
			textBoxes[i].setAttribute("disabled","disabled")	
		}	
	}	
}

document.getElementById("box1").value = getSavedValue("box1")
document.getElementById("box2").value = getSavedValue("box2")
document.getElementById("box3").value = getSavedValue("box3")
document.getElementById("box4").value = getSavedValue("box4")
document.getElementById("box5").value = getSavedValue("box5")
document.getElementById("box6").value = getSavedValue("box6")
document.getElementById("box7").value = getSavedValue("box7")
document.getElementById("box8").value = getSavedValue("box8")
document.getElementById("box9").value = getSavedValue("box9")
document.getElementById("box10").value = getSavedValue("box10")

function saveValue(e){
	var id = e.id
	var val = e.value
	localStorage.setItem(id,val)
}

function getSavedValue(v){
	if (!localStorage.getItem(v)) {
		return ""
	}
	return localStorage.getItem(v)
}



