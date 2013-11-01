<?php include "header.php" ?>
		<div class="row-fluid">
			<div class="span12 header-main">
				<div class="container-center right">
					<p >SHOPPING. CART.</p>
				</div>
			</div>
		</div>
		<div class="container-center">
			<div class="title" id="sign-up-title">
				<p>SHOPPING CART</p>
			</div>
			<div class="row-fluid" id="cart">
				<div class="span12">
				  
					
						<form name="frmcart" id="frmcart" method="post" action="cart-db.php">
						
							<input type="hidden" name="mode" id="mode" value="">
							<table>
								<tr>
									<td class="cart-column1">
										<p class="orange">SELECT</p>
									</td>
									<td class="cart-column2">
										<p class="orange">PRODUCT</p>
									</td>
									<td class="cart-column3">
										<p class="orange">PRICE</p>
									</td>
									<td class="cart-column3">
										<p class="orange">TOTAL</p>
									</td>
								</tr>
								<tr>
									<td class="cart-column1">
										<input type="checkbox" name="chkremove_item[]" id="chkremove_item[]" value="0"  />
									</td>
									<td class="cart-column2">
										<p class="regular">Your Life Force (PDF version)</p>
									</td >
									<td class="cart-column3">
										<p class="regular">$9.99</p>
									</td>
									<td class="cart-column4">
										<p class="regular">$9.99</p>
									</td>
								</tr>
								<tr>
									<td colspan="4">
										<a href="#" onclick="javascript:setaction('delete')"><img src="img/remove.jpg" /></a>
									</td>
								</tr>
								<tr>
									<td>
									</td>
									<td colspan="2" class="right">
										<p class="orange" id="card-grand-total">GRAND TOTAL</p>
									</td>
									<td>
										<p class="bold">$9.99</p>
									</td>
								</tr>
							</table>
						</form>
						<form name="frm" id="frm" method="post" action="order-db.php">
						<table class="hide-320">
						<tr>
						
							<td colspan="2">
								<input type="text" class="form-input form-input-small blog-input required" placeholder="Email*" name="txtemail" max-length="100" >
							</td>
							<td colspan="2">
								<input type="submit" class="form-submit" value="">
							</td>
						
						</tr>
						</table>
						<table class="show-320">
						<tr>
							<td colspan="2">
								<input type="text" class="form-input form-input-small blog-input required" placeholder="Email*" name="txtemail" max-length="100" >
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<input type="submit" class="form-submit" value="">
							</td>
						</tr>
						</table>
						</form>
					<div>
							<p class="h1-blue">
								<span class="semibold">IMPORTANT – Please Read:</span><br />
								Please enter your email address in the box above.<br />
								Once you complete your purchase, you will receive an <span class="semibold" >email with a link for downloading your e-book.</span><br />
								This link will expire in 3 days so please download the book within that time period.
							</P>
							<p>
								<a href="shop.php"><img src="img/back.jpg" /></a>
							</p>

					</div>
				</div>
			</div>
		</div>
		
		
<?php include "footer.php" ?>
	