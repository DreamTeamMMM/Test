<?php include "base.php"; ?>
<?php
if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['Username']))
{
	?>

	<h1>Member Area</h1>
	<p>Thanks for logging in! You are <code><?=$_SESSION['Username']?></code> and your email address is <code><?=$_SESSION['email']?></code>.</p>

	<?php
}
elseif(!empty($_POST['username']) && !empty($_POST['password']))
{
	$username = mysql_real_escape_string($_POST['username']);
	$password = md5(mysql_real_escape_string($_POST['password']));

	$checklogin = mysql_query("SELECT * FROM Users WHERE Username = '".$username."' AND Password = '".$password."'");

	if(mysql_num_rows($checklogin) == 1)
	{
		$row = mysql_fetch_array($checklogin);
		$email = $row['Email'];
		$timeedit = $row['Timeedit'];

		$_SESSION['Username'] = $username;
		$_SESSION['Email'] = $email;
		$_SESSION['Timeedit'] = $timeedit;
		$_SESSION['LoggedIn'] = 1;

		echo "<h1>Success</h1>";
		echo "<p>We are now redirecting you to the member area.</p>";
		echo "<meta http-equiv='refresh' content='=2;index.php' />";
	}
	else
	{
		echo "<h1>Error</h1>";
		echo "<p>Sorry, your account could not be found. Please <a href=\"index.php\">click here to try again</a>.</p>";
	}
}
else
{
	?>

	<?php
}
?>