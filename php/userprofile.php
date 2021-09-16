<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
//$action_type= $_REQUEST['action_type'];
$action_type= $request->action_type; 

if($action_type=="fetch_user_data"){
    $email=$request->email;
//    $fetch="SELECT id,name,apply_for FROM audition_db.tbl_application_detail WHERE email='".$email."' "; 
    $fetch="SELECT ad.id,ad.name,ad.reg_id,ad.dob,ad.picture,ad.apply_for,ad.email,
            ad.phone1,ad.state,ad.address,ad.pin,ad.gender,ad.occupation,ad.age,ad.photo_proof,ad.photo_proof_type,ad.age_proof,ad.age_proof_type,ad.phase,ad.aud_type,ad.submission1,ad.submission2,ad.submission3,
            af.apply_name
            FROM tbl_application_detail as ad
            INNER JOIN  tbl_apply_for as af
            ON ad.apply_for=af.id WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$fetch);
    
    $user_data=mysqli_fetch_assoc($mysqli);
    echo json_encode(['data'=>$user_data]);
}
else if($action_type=="fetch_sub_data"){

}

?>