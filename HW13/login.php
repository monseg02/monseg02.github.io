<?php 
session_start();

$userName = ($_POST['loguname']);
$passWord = ($_POST['logpassword']);

if ((empty($userName)) && (empty($passWord))) {
	header("Location: index.php?error=Username and Password required");
	exit();
}
elseif(empty($passWord)) {
	header("Location: index.php?error=Password is required");
	exit();
}
elseif(empty($userName)) {
	header("Location: index.php?error=User Name is required");
	exit();
}

$str = "Username = ".$userName." ; "."Password = ".$passWord;

$openfile = file_get_contents('passwd.txt');
if(strpos($openfile,$str) && $_SESSION['linkclick']=="1"){
	setcookie("username", $userName, time()+120);
	setcookie("password", $passWord, time()+120);
	header("Location: news1.php");
}
elseif(strpos($openfile,$str) && $_SESSION['linkclick']=="2"){
	setcookie("username", $userName, time()+120);
	setcookie("password", $passWord, time()+120);
	header("Location: news2.php");
}
elseif(strpos($openfile,$str) && $_SESSION['linkclick']=="3"){
	setcookie("username", $userName, time()+120);
	setcookie("password", $passWord, time()+120);
	header("Location: news3.php");
}
elseif(strpos($openfile,$str) && $_SESSION['linkclick']=="4"){
	setcookie("username", $userName, time()+120);
	setcookie("password", $passWord, time()+120);
	header("Location: news4.php");
}
elseif(strpos($openfile,$str) && $_SESSION['linkclick']=="5"){
	setcookie("username", $userName, time()+120);
	setcookie("password", $passWord, time()+120);
	header("Location: news5.php");
}
else {
	header("Location: index.php?error= Username not found. Try again.");
}
?>