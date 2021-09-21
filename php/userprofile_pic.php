<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$_REQUEST['action_type'];
if($action_type=="profile_pic"){
    $img_name=$_FILES['file']['name'];  //img name
    $email=$_REQUEST['user_email'];
    $reg_id=$_REQUEST['user_reg_id'];
    // move to file
    $img_tmp_name = $_FILES['file']['tmp_name'];  //original photo
    $extension = pathinfo($img_name,PATHINFO_EXTENSION);
    $img_file_name = $reg_id.'.'.$extension;  // database photo name
    $path = "../uploads/userprofile_img/".$img_file_name;
    
    $insert="UPDATE `tbl_application_detail` SET `picture`='".$img_file_name."' WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$insert);
    if($mysqli){
        move_uploaded_file($img_tmp_name,$path);
        echo json_encode(['status'=>"successfull"]);
    }
    else{
        echo json_encode(['status'=>'unsuccessful']);
    }
    
}
elseif($action_type=="upload_photo_id"){
    $file_name=$_FILES['file']['name'];
    $email=$_REQUEST['user_email'];
    $reg_id=$_REQUEST['user_reg_id'];
    $photo_id_type=$_REQUEST['photoidType'];


    $file_tmp_name = $_FILES['file']['tmp_name'];  //original photo
    $extension = pathinfo($file_name,PATHINFO_EXTENSION);
    $new_file_name = $reg_id.'photo.'.$extension;  // database photo name
    $path = "../uploads/user_idendity_proof/".$new_file_name;

    $insert="UPDATE `tbl_application_detail` SET `photo_proof`='".$new_file_name."' ,`photo_proof_type`='".$photo_id_type."' WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$insert);
    if($mysqli){
        move_uploaded_file($file_tmp_name,$path);
        echo json_encode(['status'=>"successfull"]);
    }
    else{
        echo json_encode(['status'=>'unsuccessful']);
    }
}
elseif($action_type=="upload_age_id"){
    $file_name=$_FILES['file']['name'];
    $email=$_REQUEST['user_email'];
    $reg_id=$_REQUEST['user_reg_id'];
    $age_id_type=$_REQUEST['ageidType'];
    
    $file_tmp_name = $_FILES['file']['tmp_name'];  //original photo
    $extension = pathinfo($file_name,PATHINFO_EXTENSION);
    $new_file_name = $reg_id.'age.'.$extension;  // database photo name
    $path = "../uploads/user_idendity_proof/".$new_file_name;

    $insert="UPDATE `tbl_application_detail` SET `age_proof`='".$new_file_name."',`age_proof_type`='".$age_id_type."' WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$insert);
    if($mysqli){
        move_uploaded_file($file_tmp_name,$path);
        echo json_encode(['status'=>"successfull"]);
    }
    else{
        echo json_encode(['status'=>'unsuccessful']);
    }


}

?>