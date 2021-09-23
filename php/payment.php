<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
//echo $postdata;die;
if(isset($postdata) && !empty($postdata))
{
	$authdata_all = [];
	$request = json_decode($postdata);
	$type = mysqli_real_escape_string($mysqli, trim($request->type));
	$user_email = mysqli_real_escape_string($mysqli, trim($request->useremail));

	$sql_fetch="SELECT  id,name, phone, email, password, status, created_ts, updated_ts FROM newostreet_db.newo_users WHERE email='".$user_email."'";

	if ($result = $mysqli -> query($sql_fetch)) {
		$row = $result -> fetch_row();
		// echo $row[0].$row[1];die;
		$userid=$row[0];
		$username=$row[3];
		$password=$row[4];
		 
		$result -> free_result();
	}
	  $today=date('Y-m-d');
	  
	  $oneYearOn = date('Y-m-d',strtotime(date("Y-m-d") . " + 365 day"));
	//   echo $oneYearOn;die;


	if($type==1){
		$sql_ott = "INSERT INTO ott_subscription(newo_user_id,ott_username,ott_subscription_date,ott_subscription_status,created_ts) VALUES ('".$userid."','".$username."','".$today."',1,now())";
		$sql_subscription="INSERT INTO user_subscription(newo_user_id, subscription_package, ott_subscription, subscription_start_date, subscription_end_date, subscription_status, created_ts) Values('".$userid."','1','1','".$today."','".$oneYearOn."',1,now())";
		
		if ($mysqli->query($sql_ott) && $mysqli->query($sql_subscription)) {
			$authdata_all=[
				'status'=>'success',
				'id'=>1,
				'username'=>$username
			];			
		}
	}
	elseif($type==2){
		$sql_starhunt = "INSERT INTO starhunt_subscription(newo_user_id, starhunt_username, starhunt_subscription_date, starhunt_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$today."',1,now())"; 
		$sql_subscription="INSERT INTO user_subscription(newo_user_id, subscription_package, starhunt_subscription, subscription_start_date, subscription_end_date, subscription_status, created_ts) Values('".$userid."','2','1','".$today."','".$oneYearOn."',1,now())";
		if ($mysqli->query($sql_starhunt) && $mysqli->query($sql_subscription)) {
			$authdata_all=[
				'status'=>'success',
				'id'=>2,
				'username'=>$username
			];			
		}
	}
	elseif($type==3){
		$sql_ott = "INSERT INTO ott_subscription(newo_user_id,ott_username,ott_subscription_date,ott_subscription_status,created_ts) VALUES ('".$userid."','".$username."','".$today."','1',now())";
		$sql_starhunt = "INSERT INTO starhunt_subscription(newo_user_id, starhunt_username, starhunt_subscription_date, starhunt_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$today."','1',now())"; 
		$sql_game = "INSERT INTO game_subscription(newo_user_id, game_username, game_subscription_date, game_subscription_status, created_ts) VALUES ('".$userid."','".$username."','".$today."','1',now())";
		$sql_subscription="INSERT INTO user_subscription(newo_user_id, subscription_package, ott_subscription,game_subscription,starhunt_subscription, subscription_start_date, subscription_end_date, subscription_status, created_ts) Values('".$userid."','3','1','1','1','".$today."','".$oneYearOn."','1',now())";

		if ($mysqli->query($sql_ott) && $mysqli->query($sql_starhunt) && $mysqli->query($sql_game) && $mysqli->query($sql_subscription)) {
			$authdata_all=[
				'status'=>'success',
				'id'=>3,
				'username'=>$username
			];			
		}

	}

	echo json_encode($authdata_all);

}

?>