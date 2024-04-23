<?php
$SERVER="localhost";
$USERNAME="root";
$PASSWORD="";
$DB="usersinfo";
$con=new mysqli($SERVER,$USERNAME,$PASSWORD,$DB);
if(!$con){
    die("COnnection Unsuccessful".$con->connect_error);
}
?>