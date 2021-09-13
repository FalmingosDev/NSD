<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$_REQUEST['action_type'];



if($action_type=="submit_knockoutfile"){
    $file_name=$_FILES['file']['name'];
    $email=$_REQUEST['user_email'];
    // $reg_id=$_REQUEST['user_reg_id'];

    $select="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysql=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysql);
    $user_id=$row['id'];

    $file_tmp_name = $_FILES['file']['tmp_name'];  //original file
    $extension = pathinfo($file_name,PATHINFO_EXTENSION);
    $new_file_name = $user_id.'.'.$extension;  // database photo name
    // echo json_encode($new_file_name);
    $path = "../image/user_submission/submission1/".$new_file_name;


    $insert="UPDATE `tbl_application_detail` SET `submission1_file`='".$new_file_name."',`submission1`='1' WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$insert);
    if($mysqli){
        move_uploaded_file($file_tmp_name,$path);
        echo json_encode(['status'=>"successfull"]);
    }
    else{
        echo json_encode(['status'=>'unsuccessful']);
    } 

}
elseif($action_type=="submit_semifinalfile"){
    $file_name=$_FILES['file']['name'];
    $email=$_REQUEST['user_email'];
    // $user_id=collectionId($email);

    $select="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysql=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysql);
    $user_id=$row['id'];

    $file_tmp_name = $_FILES['file']['tmp_name'];  //original file
    $extension = pathinfo($file_name,PATHINFO_EXTENSION);
    $new_file_name = $user_id.'.'.$extension;  // database photo name
    // echo json_encode($new_file_name);
    $path = "../image/user_submission/submission2/".$new_file_name;

    $insert="UPDATE `tbl_application_detail` SET `submission2_file`='".$new_file_name."',`submission2`='1' WHERE email='".$email."'";
    $mysqli=mysqli_query($conn,$insert);
    if($mysqli){
        move_uploaded_file($file_tmp_name,$path);
        echo json_encode(['status'=>"successfull"]);
    }
    else{
        echo json_encode(['status'=>'unsuccessful']);
    }
}
elseif($action_type=="submit_finalfile"){
    $file_name=$_FILES['file']['name'];
    $email=$_REQUEST['user_email'];

    $select="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysql=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysql);
    $user_id=$row['id'];

    $file_tmp_name = $_FILES['file']['tmp_name'];  //original file
    $extension = pathinfo($file_name,PATHINFO_EXTENSION);
    $new_file_name = $user_id.'.'.$extension;  // database photo name
    // echo json_encode($new_file_name);
    $path = "../image/user_submission/submission3/".$new_file_name;

    $insert="UPDATE `tbl_application_detail` SET `submission3_file`='".$new_file_name."',`submission3`='1' WHERE email='".$email."'";
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