<html>
<head>
   <title>Online Signup Sheet</title>
   <link href="HW12.css" rel="stylesheet">
   <script src="HW12.js" defer></script>
</head>
<body onload="disableBox()">
<form method="POST" action= "<?php echo $_SERVER['PHP_SELF']; ?>">
<table align="center" border="1" width="30%">
	<caption><b>Sign-up Sheet</b></caption>
	<tr>
		<th>Time</th>
		<th>Name</th>
	</tr>

	<tr>
		<td>8:00am</td>
		<td><input id="box1" name="text1" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>9:00am</td>
		<td><input id="box2" name="text2" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>10:00am</td>
		<td><input id="box3" name="text3" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>11:00am</td>
		<td><input id="box4" name="text4" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>12:00pm</td>
		<td><input id="box5" name="text5" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>1:00pm</td>
		<td><input id="box6" name="text6" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>2:00pm</td>
		<td><input id="box7" name="text7" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>3:00pm</td>
		<td><input id="box8" name="text8" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>4:00pm</td>
		<td><input id="box9" name="text9" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
	<tr>
		<td>5:00pm</td>
		<td><input id="box10" name="text10" type="text" value="" onkeyup="saveValue(this)"></td>
	</tr>
</table>
<br>
<center>
	<input name="SubmitButton" type="Submit" value="Submit" onclick="disableBox()">
</center>
</form>
<?php
	if (isset($_POST['SubmitButton'])){
		$input1=$_POST['text1'];
		$input2=$_POST['text2'];
		$input3=$_POST['text3'];
		$input4=$_POST['text4'];
		$input5=$_POST['text5'];
		$input6=$_POST['text6'];
		$input7=$_POST['text7'];
		$input8=$_POST['text8'];
		$input9=$_POST['text9'];
		$input10=$_POST['text10'];

		$str1 = "8:00am = " . $input1."\n";
		$str2 = "9:00am = ".$input2."\n";
		$str3 = "10:00am = ".$input3."\n";
		$str4 = "11:00am = ".$input4."\n";
		$str5 = "12:00pm = ".$input5."\n";
		$str6 = "1:00pm = ".$input6."\n";
		$str7 = "2:00pm = ".$input7."\n";
		$str8 = "3:00pm = ".$input8."\n";
		$str9 = "4:00pm = ".$input9."\n";
		$str10 = "5:00pm = ".$input10."\n";

		$file = fopen("./signups.txt","a");
		fwrite($file,$str1);
		fwrite($file,$str2);
		fwrite($file,$str3);
		fwrite($file,$str4);
		fwrite($file,$str5);
		fwrite($file,$str6);
		fwrite($file,$str7);
		fwrite($file,$str8);
		fwrite($file,$str9);
		fwrite($file,$str10);
		fclose($file);

		
		
	}
	
?>
</body>
</html>