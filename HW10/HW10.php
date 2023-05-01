<html>
<head>
	<title>process hw10.html form </title>
</head>
<body>
<?php
	$one = $_POST["connection1"];
	$two = $_POST["connection2"];
	$three = $_POST["attraction1"];
	$four = $_POST["attraction2"];
	$five = $_POST["text5"];
	$six = $_POST["text6"];

	$correct = array();

	if ($one == "False") array_push($correct, $one);
	if ($two == "True") array_push($correct, $two);
	if ((count($three)==1) && (in_array("cpu workload on a client", $three))) array_push($correct, "cpu");
	if ((count($four)==1) && (in_array("network", $four))) array_push($correct, "network");
	if (strtolower($five) == "http") array_push($correct, $five);
	if (strtolower($six) == "favicon") array_push($correct, $six);
	
	$length = count($correct);?>
	
	Your grade is <?php print("$length/6");?>

</body>
</html>


