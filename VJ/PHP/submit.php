<?php

   $username = $_POST['username'];
   $email = $_POST['email'];
   $message = $_POST['msg'];


// Create connection
$conn =  mysqli_connect('localhost','portfolio', 'vvmahato21');



mysqli_select_db($conn,'contactMeForm');

$q="insert into userDetails(username,email,message) values('$username','$email','$message')";

$i=mysqli_query($conn,$q);
header('Location:../mainFiles/');
?>