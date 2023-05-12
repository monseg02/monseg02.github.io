function validate(){
	var qone = document.querySelector('input[name="connection1"]:checked')
	var qtwo = document.querySelector('input[name="connection2"]:checked')
	var qthree = document.querySelector('input[name="attraction1[]"]:checked')
	var qfour = document.querySelector('input[name="attraction2[]"]:checked')
	var qfive = document.getElementById("q5").value
	var qsix = document.getElementById("q6").value

	
	if ((!qone) || (!qtwo) || (!qthree) || (!qfour) || (qfive=="") || (qsix=="")){
		document.regForm.action = ""
		alert("Please fill out all fields")
	}
	else{
		document.regForm.action = "./HW10.php"
	}
}
