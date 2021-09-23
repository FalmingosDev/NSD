<?php 
include_once("database.php");
$postdata = file_get_contents("php://input");


if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	$type = mysqli_real_escape_string($mysqli, trim($request->type));
	$logged_email = mysqli_real_escape_string($mysqli, trim($request->loggedEmail));
	
	if($type == 'ott'){
		$chkOtt = "SELECT COUNT(1) cnt,os.ott_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM ott_subscription os LEFT JOIN user_subscription us ON os.newo_user_id = us.newo_user_id AND us.subscription_end_date > NOW() WHERE os.ott_username = '".$logged_email."'";
		$resOtt = $mysqli->query($chkOtt);
		$rowOtt = $resOtt -> fetch_assoc();
		
		if($rowOtt['cnt'] == 1){
			if($rowOtt['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_email,'msg'=>'You have access to OTT!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'You do not have access to OTT!'];
		}
	}	
	
	if($type == 'game'){
		$chkGame = "SELECT COUNT(1) cnt,gs.game_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM game_subscription gs LEFT JOIN user_subscription us ON gs.newo_user_id = us.newo_user_id AND us.subscription_end_date > NOW() WHERE gs.game_username = '".$logged_email."'";
		$resGame = $mysqli->query($chkGame);
		$rowGame = $resGame -> fetch_assoc();
		
		if($rowGame['cnt'] == 1){
			if($rowGame['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_email,'msg'=>'You have access to GAME!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'You do not have access to GAME!'];
		}
	}	
	
	if($type == 'star'){
		$chkStar = "SELECT COUNT(1) cnt,ss.starhunt_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM starhunt_subscription ss LEFT JOIN user_subscription us ON ss.newo_user_id = us.newo_user_id AND us.subscription_end_date > NOW() WHERE ss.starhunt_username = '".$logged_email."'";
		$resStar = $mysqli->query($chkStar);
		$rowStar = $resStar -> fetch_assoc();
		
		if($rowStar['cnt'] == 1){
			if($rowStar['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_email,'msg'=>'You have access to STAR HUNT!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_email,'msg'=>'You do not have access to STAR HUNT!'];
		}
	}	


    echo json_encode($authdata_all);
}


function randomPassword($m) {
	$alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	$pass = array(); //remember to declare $pass as an array
	$alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
	for ($i = 0; $i < $m; $i++) {
		$n = rand(0, $alphaLength);
		$pass[] = $alphabet[$n];
	}
	return implode($pass); //turn the array into a string
}
?>