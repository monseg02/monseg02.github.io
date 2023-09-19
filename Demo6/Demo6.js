function calc() {
	enteredPrincipal = document.getElementById("principalNum").value
	enteredYIR = document.getElementById("yearlyIntRate").value
	enteredLoanTerm = document.getElementById("loanTerm").value
	enteredPrincipal =parseFloat(enteredPrincipal)
	enteredYIR = parseFloat(enteredYIR)
	enteredLoanTerm = parseFloat(enteredLoanTerm)
	lineBreak = "\n"
	monthlyPayment = (enteredPrincipal) * (enteredYIR/(1-(1/((1+enteredYIR)**enteredLoanTerm))))
	totalSum = monthlyPayment * enteredLoanTerm
	totalInterest = totalSum - enteredPrincipal
	if (isNaN(enteredPrincipal) || isNaN(enteredYIR) || isNaN(enteredLoanTerm)) {
		alertBox()
	} 
	else if ((enteredPrincipal<0) || (enteredYIR<0) || (enteredLoanTerm<0)) {
		alertBox()
	} 
	else {
		document.getElementById("output1").innerHTML = "Monthly Payment: " + monthlyPayment.toFixed(2) 
		document.getElementById("output2").innerHTML = "Sum of all Payments: " + totalSum.toFixed(2)
		document.getElementById("output3").innerHTML = "Total Interest: " + totalInterest.toFixed(2)
	}
	
}

function alertBox() {
	document.getElementById("output1").innerHTML = "ERROR"
	document.getElementById("output2").innerHTML = " "
	document.getElementById("output3").innerHTML = " "
}