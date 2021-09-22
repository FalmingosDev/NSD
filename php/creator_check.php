<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
$action_type= $request->action_type; 

if($action_type == 'check_creator'){
    $email=$request->email;
    // echo json_encode($email);
    $fetch_newo_id="SELECT id FROM newostreet_db.newo_users WHERE email='".$email."'";
    $mysqli_query= mysqli_query($mysqli,$fetch_newo_id);
    $result=mysqli_fetch_assoc($mysqli_query);
    $user_id=$result['id'];
    // echo json_encode($user_id);

    $checkCreator ="SELECT COUNT(newo_user_id) as user_id
                        FROM creator
                        WHERE newo_user_id='".$user_id."' ";
	$resultCreator = mysqli_query($mysqli,$checkCreator);
	$rowCreator = mysqli_fetch_assoc($resultCreator);

    $creator_count = $rowCreator['user_id'];
   if($creator_count >0){
       echo json_encode(['status'=>'user_exists']);

   }else{
    echo json_encode(['status'=>'user_doesnt_exists']);
   }
  
  // $row = $result ->fetch_row();
//   if($rowCreator['email']){
//     echo($email);die();

//   $authdata_all=['status'=>'unsuccessful','msg'=>'You have already joined'];
//   }
}


?>