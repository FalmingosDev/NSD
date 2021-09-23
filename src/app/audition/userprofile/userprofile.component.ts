import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  base_file_url:string="http://3.0.255.31/NS/uploads/";
  user_data: any;
  profie_pic_src:string="assets/images/user-home-img.jpg";
  //photo & age proof
  photoMessage: string;
  ageMessage: string;

  photoImagePath: File;
  ageImagePath: File;

  photoProofurl: any = "assets/images/defaul-profile-image.png";
  ageProofurl: any = "assets/images/defaul-profile-image.png";

  photoidType: string = "";
  ageidType: string = "";

  selectPhotoDoc: File;
  selectAgeDoc: File;
  //
  isShown:boolean=true;  //photoid type
  // isShownCamera:boolean=true;

  isVisible:boolean=true;  //ageId type
  // isVisibleCamera:boolean=true;

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.user_data = this.dataService.acceptData();
    if(this.user_data.picture!=null){
      this.profie_pic_src=this.base_file_url+"userprofile_img/"+(this.user_data.picture);
    }
    if(this.user_data.photo_proof!=null){
      this.photoProofurl=this.base_file_url+"user_idendity_proof/"+(this.user_data.photo_proof);
      this.isShown=false;
      // this.isShownCamera=false;
      $('#photoCamera').hide();
    }
    if(this.user_data.age_proof!=null){
      this.ageProofurl=this.base_file_url+"user_idendity_proof/"+(this.user_data.age_proof);
      this.isVisible=false;
      // this.isVisibleCamera=false;
      $('#ageCamera').hide();
    }

    

    $(".upload-button").on('click', function () {
      $(".file-upload").click();
    });
    $(".upload-button2").on('click', function () {
      $(".file-upload2").click();
    });




  }


  changePhotoIdType(event) {  // choose photo id type
    this.photoidType = event.target.value;

  }
  changeAgeIdType(event) {  // choose age id type
    this.ageidType = event.target.value;

  }

  onPhotoTypeChanged(event) {
    if (this.photoidType === "") {
      alert("please choose a Photo Id Type");

    }
    else {
      const files = event.target.files;
      if (files.length === 0)
        return;
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.photoMessage = "Only images are supported.";
        return;
      }
      const reader = new FileReader();
      this.photoImagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.photoProofurl = reader.result;
        // console.log(this.url);
      }
      this.selectPhotoDoc = <File>event.target.files[0];
      this.dataService.photoIndentityProof(this.selectPhotoDoc, this.photoidType);




    }
  }

  onAgeTypeChanged(event) {
    if (this.ageidType === "") {
      alert("please choose a Age Id Type");
    }
    else{
      const files = event.target.files;
      console.log(files);

      if (files.length === 0)
        return;
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.ageMessage = "Only images are supported.";
        return;
      }
      const reader = new FileReader();
      this.ageImagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.ageProofurl = reader.result;
      }
      this.selectAgeDoc=<File>event.target.files[0];
      console.log(this.selectAgeDoc);
      this.dataService.ageIndentityProof(this.selectAgeDoc, this.ageidType);


    }

  }






}