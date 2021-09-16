<?php

include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$_REQUEST['action_type'];
$user_id=$_REQUEST['id'];

if($action_type=="from_knockout"){
    $select="SELECT submission1,submission1_file FROM tbl_application_detail where id='".$user_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['status'=>$row['submission1'],'file'=>$row['submission1_file'],'stage'=>'knockout']);
    

    
}
elseif($action_type=="from_semifinal"){
    $select="SELECT submission2,submission2_file FROM tbl_application_detail where id='".$user_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['status'=>$row['submission2'],'file'=>$row['submission2_file'],'stage'=>'semifinal']);
}
elseif($action_type=="from_final"){
    $select="SELECT submission3,submission3_file FROM tbl_application_detail where id='".$user_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['status'=>$row['submission3'],'file'=>$row['submission3_file'],'stage'=>'final']);
}


?>