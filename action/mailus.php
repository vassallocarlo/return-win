<?php

$emails = "dev.vassallocarlo97@gmail.com,";
$emails .= "kristiannotari2014@gmail.com,";
$emails .= "francescokumanaku@gmail.com,";
$emails .= "niscomail@gmail.com,";
$emails .= "lisabellanti33@gmail.com,";
$emails .= "federicobarberi10@gmail.com,";
$emails .= "lorenziluca26@gmail.com,";
$emails .= "thomasamati96@gmail.com,";
$emails .= "mattpalm96@gmail.com";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
$headers .= "To: $emails" . "\r\n";
$headers .= 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$sended = mail($emails, $_POST['object'], $_POST['body'], $headers);

if(!$sended){
    echo 'Error while sending Email';
}else{
    echo 'Email successfully delivered, you will be contacted as soon as possible!';
}

?>