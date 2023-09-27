<!DOCTYPE html>
<html>
<head>
<title>LOGIN</title>
</head>
<body>
	<form action="login.php" method="POST">
		<h2>LOGIN</h2>
		 <?php if(isset($_GET['error'])) { ?>
			<p class="error"> <?php echo $_GET['error']; ?></p>
		<?php } ?>
		<label>User Name</label>
		<input type="text" name="loguname" placeholder="User Name"><br>
		<label>Password</label>
		<input type="password" name="logpassword" placeholder="Password"><br>
		Don't have an account?<br>
		<a href="registration.php">Click here to register</a><br>
		
		<button type="submit">Login</button>
	</form>
</body>
</html>