<?php include "header.php" ?>
		<div class="row-fluid">
			<div class="span12 header-main">
				<div class="container-center right">
					<p >LOG. IN.</p>
				</div>
			</div>
		</div>
		
		<div class="container-center">
			<div class="title" id="login-title">
				<p>MEMBERSHIP WEBSITE LOGIN</p>
			</div>
		</div>
		<div class="container-center">
			<div class="row-fluid" id="login-info">
				<form id="form-login" method="post" action="login-db.php">
					<div id="login-info-left">
						
							<p class="orange">
								ENTER YOUR EMAIL AND PASSWORD TO 
								ACCESS TANJA’S MEMBER ONLY AREA.
							</p>
							<p class=""><input type="text" class="form-input required" placeholder="EMAIL ADDRESS" name="user_name" maxlength="255" data-rule-email="true"></p>
							<p class=""><input type="password" class="form-input required email" placeholder="PASSWORD" name="user_password" id="form-login-password" maxlength="50" ></p>
							<p class="left" id="login-info1">
							<input type="checkbox" name="remember" id="remember_me" value="y"/>
							<span id="remember-me"class="orange">Remember Me</span>
							<span id="forgot" class="orange"><u>Forget Password?</u></span>
							</p>
							<p class="right">
								
								<input type="submit" class="form-submit" value="" name="btnsubmit">
							</p>
					</div>
					<div id="login-info-right">
						
						<p class="orange login-info-right-p">
							NOT A MEMBER? CLICK THE BUTTON
								BELOW TO JOIN TODAY!
						</p class="login-info-left-p"><br/>
						<p>
								<a href="register.php"><img src="img/register.jpg" /></a>
						</p>
					</div>
				</form>
			</div>
		</div>
	
<?php include "footer.php" ?>
