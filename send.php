<?php

require_once(__DIR__.'/PHPMailer-master/PHPMailerAutoload.php');
$message = '<p>'.$_POST['imie'].' '.$_POST['email'].' '.$_POST['text'].'</p>';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "mail11.mydevil.net";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 587;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "raf@raf.usermd.net";
//Password to use for SMTP authentication
$mail->Password = "emailHaslo1";
//Set who the message is to be sent from
$mail->setFrom( $_POST['email'], $_POST['imie'] );
//Set an alternative reply-to address
$mail->addReplyTo( $_POST['email'], $_POST['imie'] );
//Set who the message is to be sent to
$mail->addAddress('mejadres@gmail.com');
//Set the subject line
$mail->Subject = 'Kontakt przez PHPMailer | Modern portfolio';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($message);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
	echo 0 . $mail->ErrorInfo;
} else {
	echo 1;
}

?>
