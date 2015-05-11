<?php include "base.php"; ?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">	
	<link rel="stylesheet" href="reset.css">
	<link rel="stylesheet" href="bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="main.css">
	<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>	
	<script src="bootstrap/js/bootstrap.js"></script>


	<!-- Från frans orgonal fil-->
	<script src="sources/babylon.js"></script>
	<script src="sources/hand.js"></script>
	<!-- <link   href='style.css' rel='stylesheet'/-->

	<script src="script.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

</head>
<body>	
	
	<script src="layout.js"></script>
	<nav class="navbar">
		<div class="container-fluid">
			<ul id="left-menu" class="pull-left">
				<img id="uu_logo" src="uu_logo.png"></img>
			</ul>
			<div class="right-side-of-navbar pull-right">
				<div class="right-menu-container">
					<ul id="right-menu" class="">
						<div class="btn-group" role="group">
						<button type="button" class="btn btn-default signup" href="test_view.php">Sign Up</button>
						</div>
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-default login">Log In</button>
						</div>
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-default help">Help</button>
						</div>
					</ul>
					<ul id="right-menu-mobile" class="btn-group hidden">
						<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
							Action <span class="caret"></span>
						</button>
						<ul class="dropdown-menu" role="menu">
							<li><a class="signup" href="#">Sign Up</a></li>
							<li><a href="#">Log In</a></li>
							<li><a href="#">Help</a></li>
						</ul>
					</ul>
				</div>
				<div class="formular">
					<div id= "signup_box" class="hidden">
						<?php include "test_register.php"; ?>
						<div class="signup_form">
							<form method="post" action="test_view.php" name="registerform" id="registerform">
								<p>
									<input type="text" name="username" id="username" value="" placeholder="Username">
								</p>
								<p>
									<input type="text" name="email" id="email" value="" placeholder="Email">
								</p>
								<p>
									<input type="text" name="timeedit" id="timeedit" value="" placeholder="https://se.timeedit.net/web/uu/db1/schema/s.ics?i=yQ8652138Z05Q0655563XZ6007688XY80402YQ356Y5X665W">
								</p>
								<p>
									<input type="password" name="password" id="password" value="" placeholder="Password">
								</p>
								<button class=" submit"><input type="submit" name="commit" value="Sign up"></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<!-- Single button -->

	<div id="scene">
		<div class="canvas-container">
			<!--canvas id="canvas"></canvas-->
			<!--</div>-->
			<div id="search" class="search-box pull-left">
				<ul class="btn-group">
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						Search <span class="caret"></span>
					</button>
					<ul class="dropdown-menu" role="menu">
						<li>
							<div id="room-number">
								<form>
									Room name:<br>
									<input type="text" name="roomname">
									<br>
								</form>
								<button type="button" class="btn btn-default">
									Search
								</button>
							</div>
						</li>
						<li>
							<div id="room-to-room">
								<form>
									Start room:<br>
									<input type="text" name="start-roomname">
									<br>
									End room:<br>
									<input type="text" name="end-roomname">
									<br>
								</form>
								<button type="button" class="btn btn-default">
									Search
								</button>
							</div>
						</li>
						<li>
							<div id="room-free">
								<button type="button" class="btn btn-default">
									Search Empty Room 
								</button>
								<input type="text" name="room" id="txt-room">
								<input type="button" id="findButton" value="Submit">
							</div>
						</li>
					</ul>
				</ul>


			</div>
		</div>
	</div>
	<div class="result-Display">
		hej
	</div>
	<script src="script/bab.js"></script>
</body>
</html>