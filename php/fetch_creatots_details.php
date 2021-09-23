<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$request->action_type;
// echo json_encode($action_type);
if($action_type=="fetch_creators_details")
{
    $select="SELECT cd.id,cd.video_title,cv.creator_id,cv.creator_video_thumb,cv.creator_video_status
            FROM creator_details AS cd
            INNER JOIN  creator_video AS cv
            ON cd.id = cv.creator_id";
    $mysqli_data=mysqli_query($mysqli,$select);
    $data =array();
    while($row = mysqli_fetch_assoc($mysqli_data))
    {
        $data[]= $row;
        echo json_encode($data); 
             
    }
     
}

?>