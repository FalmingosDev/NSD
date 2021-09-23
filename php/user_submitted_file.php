<?php

include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$_REQUEST['action_type'];
$user_id=$_REQUEST['id'];
$judge_id=$_REQUEST['judge_id'];

if($action_type=="from_knockout_jury"){
   
    $select="SELECT td.submission1,td.submission1_file,ja.jury_id,ja.star,ja.react,ja.comment,DATE_FORMAT(ja.reaction_date, '%d-%m-%Y %H:%i:%s') as reaction_date  ,am.name,am.type
            FROM tbl_application_detail as td
            INNER JOIN tbl_jury_allocation as ja ON td.id=ja.app_id 
            INNER JOIN admin_master as am ON ja.jury_id=am.id
            WHERE td.id='".$user_id."' AND ja.jury_id='".$judge_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['data'=>$row,'stage'=>'knockout_jury']);
    

    
}
elseif($action_type=="from_knockout_mentor"){
 
    $select="SELECT td.submission1,td.submission1_file,ma.judge_id,ma.star,ma.react,ma.comment,DATE_FORMAT(ma.reaction_date, '%d-%m-%Y %H:%i:%s') as reaction_date  ,am.name,am.type
            FROM tbl_application_detail as td
            INNER JOIN tbl_judge_allocation as ma ON td.id=ma.app_id 
            INNER JOIN admin_master as am ON ma.judge_id=am.id
            WHERE td.id='".$user_id."' AND ma.judge_id='".$judge_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['data'=>$row,'stage'=>'knockout_mentor']);
    

    
}

elseif($action_type=="from_semifinal")
{
// echo $judge_id;
// die();
    $select="SELECT td.submission2,td.submission2_file,sa.judge_id,sa.star,sa.react,sa.comment,DATE_FORMAT(sa.reaction_date, '%d-%m-%Y %H:%i:%s') as reaction_date  ,am.name,am.type
            FROM tbl_application_detail as td
            INNER JOIN tbl_semi_final_allocation as sa ON td.id=sa.app_id 
            INNER JOIN admin_master as am ON sa.judge_id=am.id
            WHERE td.id='".$user_id."' AND sa.judge_id='".$judge_id."' ";
    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);
    echo json_encode(['data'=>$row,'stage'=>'semifinal']);
}
elseif($action_type=="from_final")
{
    
   
    $select="SELECT td.submission3,td.submission3_file,fa.judge_id,fa.star,fa.react,fa.comment,DATE_FORMAT(fa.reaction_date, '%d-%m-%Y %H:%i:%s') as reaction_date  ,am.name,am.type
            FROM tbl_application_detail as td
            INNER JOIN tbl_final_allocation as fa ON td.id=fa.app_id 
            INNER JOIN admin_master as am ON fa.judge_id=am.id
            Where td.id='".$user_id."' AND fa.judge_id='".$judge_id."' ";

    $mysqli=mysqli_query($conn,$select);
    $row=mysqli_fetch_assoc($mysqli);

    echo json_encode(['data'=>$row,'stage'=>'final']);
}


?>