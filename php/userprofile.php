<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//$action_type= $_REQUEST['action_type'];
$action_type= $request->action_type; 

if($action_type=="fetch_user_data"){
    $email=$request->email;
//    $fetch="SELECT id,name,apply_for FROM audition_db.tbl_application_detail WHERE email='".$email."' "; 
    $fetch="SELECT ad.id,ad.name,ad.apply_for,ad.email,ad.phone1,
                   ad.state,ad.address,ad.gender,ad.occupation,ad.age,
                  af.apply_name
            FROM audition_db.tbl_application_detail as ad
            INNER JOIN  audition_db.tbl_apply_for as af
            ON ad.apply_for=af.id WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$fetch);
    
    $user_data=mysqli_fetch_assoc($mysqli);
    echo json_encode(['data'=>$user_data]);
}
elseif($action_type=="profile_pic"){
    echo json_encode(['data'=>"hus"]);
}
?>