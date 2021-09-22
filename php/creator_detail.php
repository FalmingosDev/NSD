<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type= $_REQUEST['action_type']; //static value comes frots file for different work in single php page


if($action_type == 'creatorList'){
    
    
    // $select="SELECT id, creator_id, video_id FROM creator_details";
    $select="SELECT cd.id, cv.video_code, cd.creator_id, cd.video_id, cv.creator_video, cd.upload_datetime FROM creator_details cd inner join creator_video cv on cd.video_id=cv.id";
    
    $mysqli=mysqli_query($mysqli,$select);
    
    $ar=array();
    while ($rows=mysqli_fetch_assoc($mysqli)) {
        $ar[]=$rows;
        
    }
    echo json_encode(['data'=>$ar]);
    
}

?>