<?php

// Email for contact.html form.

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

$text = "
<p>You've received a contact request from wellencpa.com</h2>

<p>Client info:</p>
<ul>
    <li><b>Name:</b> $name</li>
    <li><b>Email:</b> $email</li>
    <li><b>Phone:</b> $phone</li>
</ul>

<p>Message:</p>
<p>$message</p>
";

$headers = "From: contact@wellencpa.com" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail("don4thirteen@gmail.com", "New Client", $text, $headers);