<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


// if(isset($postdata) && !empty($postdata)){

 $creator_user_name = mysqli_real_escape_string($mysqli, trim($_REQUEST['creator_user_name'])); 

 $creator_topic = mysqli_real_escape_string($mysqli, trim($_REQUEST['creator_topic']));
 
 $creator_desc = mysqli_real_escape_string($mysqli, trim($_REQUEST['creator_desc']));
 $email = mysqli_real_escape_string($mysqli, trim($_REQUEST['email']));
 $creator_dob = mysqli_real_escape_string($mysqli, trim($_REQUEST['creator_dob']));
 $creator_profile_pic_name =$_FILES['file']['name'];
  $extension = pathinfo($creator_profile_pic_name,PATHINFO_EXTENSION);
  $profile_img_name = $creator_user_name.'.'.$extension; //db file name   
  $img_tmp_name = $_FILES['file']['tmp_name'];  // pic
  $path = "../image/creator_image/".$profile_img_name;
  

  // $checkCreator = "select * from newostreet_db.creator where email='".$email."'";
	// // $resultCreator = query($checkCreator);
	// $rowCreator = mysqli_fetch_row($checkCreator);
  // // echo($email);die();
  // // $row = $result ->fetch_row();
  // if($rowCreator['email']){
  //   echo($email);die();

  // $authdata_all=['status'=>'unsuccessful','msg'=>'You have already joined'];
  // }


  // else{

  $sql_fetch="SELECT  id, email, created_ts, updated_ts FROM newostreet_db.newo_users WHERE email='".$email."'";
  //  die();
  if ($result = $mysqli -> query($sql_fetch)) {
    $row = $result ->fetch_row();
    $newo_user_id=$row[0];  
    } 
    // $result -> free_result();
    
    $insert="INSERT INTO `creator`(`newo_user_id`, `creator_user_name`, `creator_dob`, `creator_topic`, `creator_desc`, `creator_profile_pic`,`creator_status`,`created_ts`) VALUES ('$newo_user_id','$creator_user_name','$creator_dob','$creator_topic','$creator_desc','$profile_img_name','1',now());"; 
    $mysqli_querry=mysqli_query($mysqli,$insert);
    // echo ($mysqli_querry);die();
    if($mysqli_querry){
      move_uploaded_file($img_tmp_name,$path);
      $authdata_all=['status'=>'success','msg'=>'Successfully Submitted'];
    }
    else {
      $authdata_all=['status'=>'unsuccessful','msg'=>'Try Again'];
    
    }
  // } this is if closing bracket
    echo json_encode($authdata_all);
  // }




/*
elseif($action_type=='query_add'){
	
	$user_query = $db->escape_string(trim($_REQUEST['user_query']));

	$checkQuery = "select ifnull(name,'') name, ifnull(email,'') email, ifnull(phone,'') phone, ifnull(address,'') address, ifnull(pincode,'') pincode, ifnull(ward,'') ward from user_registration where id = '".$logged_user_id."'";
	$resultQuery = $db->query($checkQuery);
	$rowQuery = mysqli_fetch_assoc($resultQuery);

	if($rowQuery['name'] && $rowQuery['email'] && $rowQuery['phone'] && $rowQuery['address'] && $rowQuery['pincode'] && $rowQuery['ward']){
		$query ="INSERT INTO `users_query` (`register_user_id`, `user_query`, `query_date`, `created_at`)VALUES('$logged_user_id','$user_query',NOW(),NOW());";
		$result = $db->query($query);	
		$return_data = array("status" => true,"msg" => "Your query has been submitted!");
	}
	else{
		$return_data = array("status" => false,"msg" => "Complete your profile to proceed");
	}
	
	echo json_encode($return_data);

}
*/


?>