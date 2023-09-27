<?php
session_start();

if (isset($_COOKIE['username']) && isset($_COOKIE['password'])) {
	?>	
	<!DOCTYPE html>
	<html>
	<head>
		<title>link1</title>
	</head>
	<body>
		<p>This is the news about the Barbie Movie</p>
		<p>You have logged into link 1!</p>
	</body>
	</html>
	<?php 
} else {
	$_SESSION['linkclick'] = "1";
	header("Location: index.php");
	exit();
}
?>	