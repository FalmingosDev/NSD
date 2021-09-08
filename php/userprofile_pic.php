<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$img=$_FILES['file']['name'];
$action_type=$_REQUEST['action_type'];
echo json_encode($action_type);


?>