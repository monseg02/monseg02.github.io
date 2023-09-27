var top_img = "galaxyCluster"
var top_cap = "caption1"
var img_src = new Array ("galaxyCluster","M104","NGC1300","InteractingGalaxies","M51","NGC6217")
var cap_src = new Array ("caption1","caption2","caption3","caption4","caption5","caption6")

function get_img () {
	var rnd_idx = Math.trunc (Math.random() * img_src.length)
	return rnd_idx
}


function changeImg() {
	var overallIndex = get_img()
	var new_img = img_src[overallIndex]
	var new_cap = cap_src[overallIndex]

	styleTop = document.getElementById(top_img).style
	styleNew = document.getElementById(new_img).style


	styleTop.zIndex = "0"
	styleNew.zIndex = "10"
	top_img = new_img
    
    styleTopCap = document.getElementById(top_cap).style
    styleNewCap = document.getElementById(new_cap).style
    

	styleTopCap.zIndex = "0"
	styleNewCap.zIndex = "10"
	top_cap = new_cap

}