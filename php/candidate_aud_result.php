<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type=$request->action_type;
$email=$request->local_email;
if($action_type=="check_juryallocation_result"){
    $select_id="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysqli_id=mysqli_query($conn,$select_id);
    $result=mysqli_fetch_assoc($mysqli_id);
    $can_id=$result['id'];
    // echo $can_id;




    $select_res="SELECT td.id,td.submission1,ja.app_id,ja.react,ja.status,ja.approve,ja.jury_id,ja.approved_by
                FROM tbl_application_detail as td
                INNER JOIN tbl_jury_allocation as ja
                ON td.id = ja.app_id WHERE td.id='".$can_id."' ";

    $mysqli_res=mysqli_query($conn,$select_res);
    $jury_allocation=mysqli_fetch_assoc($mysqli_res);
    echo json_encode(['jury_allocation'=>$jury_allocation]);

   
}
elseif ($action_type=="check_judgeallocation_result") 
{
    $select_id="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysqli_id=mysqli_query($conn,$select_id);
    $result=mysqli_fetch_assoc($mysqli_id);
    $can_id=$result['id'];

    $select_res="SELECT td.id,td.submission2,ja.app_id,ja.react,ja.status,ja.approve,ja.judge_id,ja.approved_by
                FROM tbl_application_detail as td
                INNER JOIN tbl_judge_allocation as ja
                ON td.id = ja.app_id WHERE td.id='".$can_id."' ";
    $mysqli_res=mysqli_query($conn,$select_res);
    $judge_allocation=mysqli_fetch_assoc($mysqli_res);
    echo json_encode(['judge_allocation'=>$judge_allocation]);

    
}
elseif($action_type=="check_semi_mentor_result")
{
    $select_id="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysqli_id=mysqli_query($conn,$select_id);
    $result=mysqli_fetch_assoc($mysqli_id);
    $can_id=$result['id'];
    // echo $can_id;
    $select_res="SELECT td.id,td.submission2,sa.app_id,sa.react,sa.status,sa.approve,sa.judge_id,sa.approved_by
                FROM tbl_application_detail as td
                INNER JOIN tbl_semi_final_allocation as sa
                ON td.id = sa.app_id WHERE td.id='".$can_id."' ";
    $mysqli_res=mysqli_query($conn,$select_res);
    $semi_allocation=mysqli_fetch_assoc($mysqli_res); 
    echo json_encode(['semi_allocation'=>$semi_allocation]);


}
elseif($action_type=="check_final_mentor_result") {
    $select_id="SELECT id FROM tbl_application_detail where email='".$email."' ";
    $mysqli_id=mysqli_query($conn,$select_id);
    $result=mysqli_fetch_assoc($mysqli_id);
    $can_id=$result['id'];
    $select_res="SELECT td.id,td.submission2,fa.app_id,fa.react,fa.status,fa.approve,fa.judge_id,fa.approved_by
                FROM tbl_application_detail as td
                INNER JOIN tbl_final_allocation as fa
                ON td.id = fa.app_id WHERE td.id='".$can_id."' ";
    $mysqli_res=mysqli_query($conn,$select_res);
    $final_allocation=mysqli_fetch_assoc($mysqli_res);  
    echo json_encode(['final_allocation'=>$final_allocation]);          
}


?>