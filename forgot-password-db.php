<?php 
	if ( isset($_REQUEST['btnsubmit_x']) && isset($_REQUEST['btnsubmit_y']) ) {
		$objvalidation = new validation();
		$objvalidation->add_validation("txtemail", "email", "req");
		$objvalidation->add_validation("txtemail", "email address", "email");
		if ($objvalidation->validate()) {
			$stremail = $cmn->setval(trim($cmn->read_value($_POST["txtemail"],"")));
			$arcustomer = $objcustomer->fetchallasarray(NULL, NULL, ' AND email = \'' . $stremail . '\'');
			if ( is_array($arcustomer) && count($arcustomer) ) {
				include_once 'member/adminsection/class/clssiteconfig.php';
				$objsiteconfig = new siteconfig();
				$strsubject = 'Your login details at Loud Fitness.';
				$aremail_replace = array('##customer_name##', '##email##', '##password##');
				$aremail_replace_with = array($cmn->getval($arcustomer[0]['firstname'] . ' ' . $arcustomer[0]['lastname']), $cmn->getval($arcustomer[0]['email']), $cmn->getval($arcustomer[0]['password']));
				$strmessage = $cmn->get_file_content('templates/forgot_password_template.html', $aremail_replace, $aremail_replace_with);		
				$strcustomer_name = $cmn->getval($arcustomer[0]['firstname'] . ' ' . $arcustomer[0]['lastname']);
				$stremail_from = $cmn->getval($objsiteconfig->from_email);
				$stremail_from_name = $cmn->getval($objsiteconfig->from_name);
				$cmn->phpmailer($cmn->getval($arcustomer[0]['email']), $strsubject, $strmessage, $cmn->getval($arcustomer[0]['firstname'] . ' ' . $arcustomer[0]['lastname']), $stremail_from, $stremail_from_name);
				$msg->send_msg('forgot-password.php', '', 34);		
				exit();
			}
			else {
				$msg->send_msg('forgot-password.php', '', 24);		
				exit();
			}
		}
	}
?>