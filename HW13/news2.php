<?php
session_start();

if (isset($_COOKIE['username']) && isset($_COOKIE['password'])) {
	?>
	<!DOCTYPE html>
	<html>
	<head>
		<title>link2</title>
	</head>
	<body>
		<p>This is the page about Rauw Alejandro</p>
		<p>You have logged into link 2!</p>
	</body>
	</html>
	<?php 
} else {
	$_SESSION['linkclick'] = "2";
	header("Location: index.php");
	exit();
}
?>