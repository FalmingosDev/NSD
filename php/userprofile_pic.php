<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$img_name=$_FILES['file']['name'];  //img name
$action_type=$_REQUEST['action_type'];
$email=$_REQUEST['user_email'];
$reg_id=$_REQUEST['user_reg_id'];
// move to file
$img_tmp_name = $_FILES['file']['tmp_name'];
$extension = pathinfo($img_name,PATHINFO_EXTENSION);
$img_file_name = $reg_id.'.'.$extension;  // database
$path = "../image/userprofile_img/".$img_file_name;

$insert="UPDATE `tbl_application_detail` SET `picture`='".$img_file_name."' WHERE email='".$email."'";
$mysqli=mysqli_query($conn,$insert);
if($mysqli){
     move_uploaded_file($img_tmp_name,$path);
     echo json_encode(['status'=>"successfull"]);
}
else{
    echo json_encode(['status'=>'unsuccessful']);
}




//move to file
// $img_tmp_name = $_FILES['file']['tmp_name'];
// $extension = pathinfo($img_name,PATHINFO_EXTENSION);
// $img_file_name = 'abcd.'.$extension;
// $path = "../src/assets/images/userprofile/".$img_file_name;
// move_uploaded_file($img_tmp_name,$path);
//
   







?>