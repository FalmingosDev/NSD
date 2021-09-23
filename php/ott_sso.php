<?php 
include_once("dbott.php");
$postdata = file_get_contents("php://input"); 
$request = json_decode($postdata); 
if(isset($postdata) && !empty($postdata))
{
    $type = mysqli_real_escape_string($mysqli, trim($request->type));
    $ottUsername = mysqli_real_escape_string($mysqli, trim($request->ott_username));

    if($type == 'register'){
        $sqlOtt = "CALL ott_sso_reg('$ottUsername')";
    }
    elseif($type == 'login'){

    }
    else
    {
        http_response_code(404);
    }
    //echo $ottUsername; die;
    /*$email = mysqli_real_escape_string($mysqli, trim($request->email));
    $sql = "CALL login_process('$email','$pwd')";
    if($result = mysqli_query($mysqli,$sql)) 
    {
        $rows = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $rows[] = $row; 
        }
        echo json_encode($rows);
    }
    else
    {
        http_response_code(404);
    }*/
}
?>