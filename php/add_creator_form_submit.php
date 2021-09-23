<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$action_type= $_REQUEST['action_type']; //static value comes frots file for different work in single php page


if($action_type == 'genreList'){
   //$genre= $_REQUEST['genre_name']; //for applyValue this is a come as a id
    
    $select="SELECT id, genre_name FROM video_genre";
    
    $mysqli=mysqli_query($mysqli,$select);
    $ar=array();
    while ($rows=mysqli_fetch_assoc($mysqli)) {
        $ar[]=$rows;
    }
    echo json_encode(['data'=>$ar]);
}

else if($action_type == 'languageList'){
  //$genre= $_REQUEST['genre_name']; //for applyValue this is a come as a id
   
   $select="SELECT id, language_name FROM video_language";
   
   $mysqli=mysqli_query($mysqli,$select);
   $ar=array();
   while ($rows=mysqli_fetch_assoc($mysqli)) {
       $ar[]=$rows;
   }
   echo json_encode(['data'=>$ar]);
}

else if($action_type == 'creatorVideoSubmit'){
    // $upload_dir = "http://localhost/NSD/image/creator_thumb/"; 

 $email = $_REQUEST['email'];

 $sql_fetch="SELECT  id FROM newo_users WHERE email='".$email."'";
 $mysql=mysqli_query($mysqli,$sql_fetch);
 $result_id=mysqli_fetch_assoc($mysql);
 $creator_id=$result_id['id'];
 $video_id = 'NCV'.$creator_id.rand(100000,999999);

 $video_title = mysqli_real_escape_string($mysqli, trim($_REQUEST['video_title'])); 
 $video_desc = mysqli_real_escape_string($mysqli, trim($_REQUEST['video_desc']));

 $video_file = $_FILES['file']['name'];
 $video_temp_name = $_FILES['file']['tmp_name'];
 $extension = pathinfo($video_file,PATHINFO_EXTENSION);
 $video_name = $video_title.'.'.$extension; //db file name 
 $path = "../video/ceator_video/".$video_name;

 $image_file = $_FILES['img']['name'];
 $image_temp_name = $_FILES['img']['tmp_name']; //main file
 $img_extension = pathinfo($image_file,PATHINFO_EXTENSION);
 $image_name = $video_title.'.'.$img_extension; //db file name 
 $img_path = "../video/creator_thumb/".$image_name;



//  $creator_profile_pic_name =$_FILES['file']['name'];
 // $img_tmp_name = $_FILES['file']['tmp_name'];  // pic
//  $extension = pathinfo($creator_profile_pic_name,PATHINFO_EXTENSION);
//  $profile_img_name = $title.'.'.$extension; //db file name 
//  $path = "../image/creator_image/".$profile_img_name;


/* if(!empty(array_filter($_FILES['files']['name']))) {
 foreach ($_FILES['uploadThumb']['tmp_name'] as $key => $value) {
    $file_tmpname = $_FILES['uploadThumb']['tmp_name'][$key];
    $file_name = $_FILES['files']['name'][$key];
    $filepath = $upload_dir.$file_name;

    if(file_exists($filepath)) {
        $filepath = $upload_dir.time().$file_name;
         
        if( move_uploaded_file($file_tmpname, $filepath)) {
            echo "{$file_name} successfully uploaded <br/>";
        }
        else {                    
            echo "Error uploading {$file_name} <br/>";
        }
    }
    else {
     
        if( move_uploaded_file($file_tmpname, $filepath)) {
            echo "{$file_name} successfully uploaded <br/>";
        }
        else {                    
            echo "Error uploading {$file_name} <br/>";
        }
    }

 }
 $msg = "success";
 }
 else {
         
    // If no files selected
    $msg = "No files selected.";
   } */
   
 $genre = mysqli_real_escape_string($mysqli, trim($_REQUEST['genreList']));
 $language = mysqli_real_escape_string($mysqli, trim($_REQUEST['languageList']));
 $year = mysqli_real_escape_string($mysqli, trim($_REQUEST['year']));
 $director = mysqli_real_escape_string($mysqli, trim($_REQUEST['director']));
 $cast = mysqli_real_escape_string($mysqli, trim($_REQUEST['cast']));
 $writer = mysqli_real_escape_string($mysqli, trim($_REQUEST['writer']));
 $camera = mysqli_real_escape_string($mysqli, trim($_REQUEST['camera']));
 $photo = mysqli_real_escape_string($mysqli, trim($_REQUEST['photo']));
 $photo_cam = $camera.','.$photo;

 $audiance = mysqli_real_escape_string($mysqli, trim($_REQUEST['audiance']));
 $runtime = mysqli_real_escape_string($mysqli, trim($_REQUEST['runtime']));


  $insert_video="INSERT INTO `creator_video`(`creator_id`,`video_id`, `creator_video`, `creator_video_thumb`, `creator_video_status`, `created_ts`) VALUES ('$creator_id','$video_id', '$video_name','$image_name','1',now());";
    $mysqli_querry_vid=mysqli_query($mysqli,$insert_video); 

    if($mysqli_querry_vid)
    {
        move_uploaded_file($video_temp_name,$path);
        move_uploaded_file($image_temp_name,$img_path);
        

        $sql_fetch_video="SELECT id FROM creator_video WHERE created_ts=now()";
        $mysql=mysqli_query($mysqli,$sql_fetch_video);
        $result=mysqli_fetch_assoc($mysql);
        $video_id=$result['id'];

        $insert="INSERT INTO `creator_details`(`creator_id`, `video_title`, `video_desc`,`video_id`,`genre_id`, 
        `language_id`, `year`,`cast`,`director`,`writer`,`camera`,`runtime`,`audiance`,`status`,`upload_datetime`,`created_ts`) 
        VALUES ('$creator_id','$video_title','$video_desc','$video_id','$genre','$language','$year','$cast','$director','$writer','$photo_cam','$runtime','$audiance','1',now(),now());";
        $mysqli_querry=mysqli_query($mysqli,$insert);
        
        if($mysqli_querry){
        //   move_uploaded_file($video_temp_name,$path);
        $authdata_all=['status'=>'success','msg'=>'Successfully Submitted'];
        }

        else {
        $authdata_all=['status'=>'unsuccessful','msg'=>'Try Again'];
        
        }
    
        echo json_encode($authdata_all);
    }

}




//  $title = mysqli_real_escape_string($mysqli, trim($_REQUEST['title'])); 

//  $video_desc = mysqli_real_escape_string($mysqli, trim($_REQUEST['video_desc']));
 
//  $year = mysqli_real_escape_string($mysqli, trim($_REQUEST['year']));
//  $director = mysqli_real_escape_string($mysqli, trim($_REQUEST['director']));
//  $cast = mysqli_real_escape_string($mysqli, trim($_REQUEST['cast']));
//  $writer = mysqli_real_escape_string($mysqli, trim($_REQUEST['writer']));
//  $camera = mysqli_real_escape_string($mysqli, trim($_REQUEST['camera']));
//  $audience = mysqli_real_escape_string($mysqli, trim($_REQUEST['audience']));
//  $runtime = mysqli_real_escape_string($mysqli, trim($_REQUEST['runtime']));

//  $creator_profile_pic_name =$_FILES['file']['name'];
// $extension = pathinfo($creator_profile_pic_name,PATHINFO_EXTENSION);
// $profile_img_name = $title.'.'.$extension; //db file name   
// $img_tmp_name = $_FILES['file']['tmp_name'];  // pic
// $path = "../image/creator_image/".$profile_img_name;
  


//   $sql_fetch="SELECT  id, email, created_ts, updated_ts FROM newostreet_db.newo_users WHERE email='".$email."'";
 
//   if ($result = $mysqli -> query($sql_fetch)) {
//     $row = $result ->fetch_row();
//     $newo_user_id=$row[0];  
//     } 




//     $insert="INSERT INTO `creator`(`newo_user_id`, `title`, `cast`, `video_desc`, `year`, `creator_profile_pic`,`creator_status`,`created_ts`) VALUES ('$newo_user_id','$title','$cast','$video_desc','$year','$profile_img_name','1',now());"; 
//     $mysqli_querry=mysqli_query($mysqli,$insert);
    
//     if($mysqli_querry){
//       move_uploaded_file($img_tmp_name,$path);
//       $authdata_all=['status'=>'success','msg'=>'Successfully Submitted'];
//     }
//     else {
//       $authdata_all=['status'=>'unsuccessful','msg'=>'Try Again'];
    
//     }
  
//     echo json_encode($authdata_all);
  



?>