<?php

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
$headers .= 'To: CarloVassallo <dev.vassallocarlo97@gmail.com>' . "\r\n";
$headers .= 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$sended = mail('dev.vassallcarlo97@gmail.com', $_POST['object'], $_POST['body'], $headers);

if(!$sended){
    echo 'Error while sending Email';
}else{
    echo 'Email successfull delivered, you will be contacted as soon as possible!';
}

?>