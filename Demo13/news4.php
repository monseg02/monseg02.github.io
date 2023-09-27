<?php
session_start();

if (isset($_COOKIE['username']) && isset($_COOKIE['password'])) {
	?>
	<!DOCTYPE html>
	<html>
	<head>
		<title>link4</title>
	</head>
	<body>
		<p>This is the page about Selena Gomez' new lip oil product</p>
		<p>You have logged into link 4!</p>
	</body>
	</html>
	<?php 
} else {
	$_SESSION['linkclick'] = "4";
	header("Location: index.php");
	exit();
}
?>