<?php
session_start();

if (isset($_COOKIE['username']) && isset($_COOKIE['password'])) {
	?>
	<!DOCTYPE html>
	<html>
	<head>
		<title>link3</title>
	</head>
	<body>
		<p>This is the page about the weather during easter weekend</p>
		<p>You have logged in to link 3!</p>
	</body>
	</html>
	<?php 
} else {
	$_SESSION['linkclick'] = "3";
	header("Location: index.php");
	exit();
}
?>