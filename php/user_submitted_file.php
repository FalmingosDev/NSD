<?php

include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$_REQUEST['action_type'];
$user_id=$_REQUEST['id'];

if($action_type=="from_knockout"){
    // $select=""
    echo json_encode(['action'=>$action_type,'id'=>$user_id]);
}
elseif($action_type=="from_semifinal"){
    echo json_encode(['action'=>$action_type,'id'=>$user_id]);
}
elseif($action_type=="from_final"){
    echo json_encode(['action'=>$action_type,'id'=>$user_id]);
}


?>