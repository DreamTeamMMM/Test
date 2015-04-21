<?php include "base.php"; ?>
<!DOCTYPE html>
<html>
<head>
  <link href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/shift.css" rel="stylesheet">
  <link rel="stylesheet" href="http://s3.amazonaws.com/codecademy-content/courses/ltp/css/bootstrap.css">
  <link rel="stylesheet" href="test_main.css">
  <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
  <script language="JavaScript" type="text/javascript" src="test_javascript.js"></script>
</head>
<body>
  <div class="nav">
    <div class="container">
      <ul class="pull-left">
        <li><a href="#">Name</a></li>
        <li><a href="#">Browse</a></li>
      </ul>
      <ul class="pull-right">
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  </div>

  <div class="jumbotron vertical-center">
    <div class="container">
      <div class="box">
        <div class="button_box">
          <div class="btn-group btn-group-lg" role="group" aria-label="...">
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default guest">Guest</button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default login">Login</button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-default signup">Sign up</button>
            </div>
          </div>
        </div>
        <div class="login_box hidden">
        <?php include "test_register.php"; ?>
          <div class="login_form">
            <form method="post" action="test_index.php" name="loginform" id="loginform">
              <p>
                <input type="text" name="username" id="username" value="" placeholder="Username or Email">
              </p>
              <p>
                <input type="password" name="password" id="password" value="" placeholder="Password">
              </p>
              <p id="remember_me" class="remember_me">
                <label>
                  <input type="checkbox" name="remember_me" id="remember_me">Kom ihåg mig
                </label>
              </p>
              <p class="submit"><input type="submit" name="login" id="login" value="Login"></p>
            </form>
          </div> 
        </div>
        <div class="signup_box hidden">
        <?php include "test_register.php"; ?>
          <div class="signup_form">
            <form method="post" action="test_register.php" name="registerform" id="registerform">
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
</body>
</html>