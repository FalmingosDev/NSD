<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
$action_type= $_REQUEST['action_type']; //static value comes frots file for different work in single php page


if($action_type == 'applyFor'){
   $applicant_age= $_REQUEST['applicant_age']; //for applyValue this is a come as a id
    if($applicant_age<13){
    $select="SELECT id,apply_name,amount from tbl_apply_for where post_for = 'junior'";
    }
    else{
    $select="SELECT id,apply_name,amount FROM tbl_apply_for where post_for = 'senior'";
    }
    $mysqli=mysqli_query($conn,$select);
    $ar=array();
    while ($rows=mysqli_fetch_assoc($mysqli)) {
        $ar[]=$rows;
    }
    echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'applyValue'){
        $applicant_age= $_REQUEST['applicant_age']; //for applyValue this is a come as a id
        $select="SELECT amount FROM tbl_apply_for where id=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        $rows=mysqli_fetch_assoc($mysqli);
        $ar[]=$rows; 
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'phaseChoose'){
       
        $select="SELECT phase_title FROM tbl_phase;";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        while ($rows=mysqli_fetch_assoc($mysqli)) {
            $ar[]=$rows;
        }
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'venueChoose'){  // finding the venue   
        $applicant_age= $_REQUEST['applicant_age']; 
        $select="SELECT id,venue_name,venue_address,phase FROM tbl_venue_list WHERE phase=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        while ($rows=mysqli_fetch_assoc($mysqli)) {
            $ar[]=$rows;
        }
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'hotelChoose'){  // finding the venue
        $applicant_age= $_REQUEST['applicant_age']; 
        $select="SELECT tbl_venue_list.venue_address, tbl_venuedatecapacity.venue_date,tbl_venuedatecapacity.id
                FROM tbl_venue_list
                 INNER JOIN tbl_venuedatecapacity
                 ON tbl_venue_list.id=tbl_venuedatecapacity.venue_id WHERE tbl_venue_list.id=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        $rows=mysqli_fetch_assoc($mysqli);
        $ar[]=$rows;
        $newD=explode('-',$rows['venue_date']); 
        $newDD=$newD[2].'/'.$newD[1].'/'.$newD[0];
        $ar['newDate'] =  $newDD;
        echo json_encode(['data'=>$ar]);
}

else if($action_type == 'check_email'){
        $starReg = 0;
        $check_email=$_REQUEST['check_email'];
        $check="SELECT COUNT(email) AS email FROM audition_db.tbl_application_detail where email='".$check_email."'";
       // echo $check; die;
        $mysqli=mysqli_query($conn,$check);
        $rows=mysqli_fetch_assoc($mysqli);
        /*print_r($rows); 
        echo $rows['email'];
        die;*/
        if($rows['email']>0){
             $starReg = 1;   
        }
        $ar=array("starReg"=>$starReg,"email"=>$rows['email']); 
        echo json_encode($ar);
}



?>