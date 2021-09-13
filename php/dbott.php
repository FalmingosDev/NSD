<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'netwoode_video';
$connOtt = new mysqli($db_host, $db_username, $db_password,$db_name);


if ($connOtt->connect_error) {
die('Error : ('. $connOtt->connect_errno .') '. $connOtt->connect_error);
}
?>