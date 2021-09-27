import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

import { ApiService } from 'src/app/api.service';


// import * as $ from 'jquery';

@Component({
  selector: 'app-creatorcontentedit',
  templateUrl: './creatorcontentedit.component.html',
  styleUrls: ['./creatorcontentedit.component.css']
})
export class CreatorcontenteditComponent implements OnInit {

  local_email:string="";

  editcrtForm: FormGroup;
  frutas: string[] = [];
  carros: string[] = [];
  message:string;
  imagePath:File;
  url:any='assets/images/defaul-profile-image.png';
  selectedFile:File;

  genreValues: string[] = [];
  languageValues: string[] = [];

  uploadThumb: File[] = [];

  video: File;
  image: File;

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {    const email = localStorage.getItem('token');
  this.local_email=email;

  this.editcrtForm = new FormGroup({
    video_file : new FormControl('', Validators.required), 
    video_title : new FormControl('', Validators.required),
    video_desc : new FormControl('', Validators.required),
   // video_upload: new FormControl('', Validators.required),

   image_file : new FormControl('', Validators.required),

    genreList : new FormControl('', Validators.required),
    languageList : new FormControl('', Validators.required),
    year : new FormControl('', Validators.required),
    cast : new FormControl('', Validators.required),
    director : new FormControl('', Validators.required),
    writer : new FormControl('', Validators.required),
    photo : new FormControl('', Validators.required),
    camera : new FormControl('', Validators.required),
    runtime : new FormControl('', Validators.required),
    audiance : new FormControl('', Validators.required),

  })

      

  this.getGenreList();
  this.getLanguageList();
  

  $(document).on('change','#vid_up', function(){
      var names:any = [];
      var length = $(this).get(0).files.length;
        for (var video_id = 0; video_id < $(this).get(0).files.length; ++video_id) {
            names.push($(this).get(0).files[video_id].name);
        }
        // $("input[name=file]").val(names);
      if(length>2){
        var fileName = names.join(', ');
        $(this).closest('.form-group').find('.form-control').attr("value",length+" files selected");
      }
      else{
        $(this).closest('.form-group').find('.form-control').attr("value",names);
      }
  });

  $(document).on('change','#multi_up', function(){
    var names:any = [];
    var length = $(this).get(0).files.length;
      for (var photo_id = 0; photo_id < $(this).get(0).files.length; ++photo_id) {
          names.push($(this).get(0).files[photo_id].name);
      }
      // $("input[name=file]").val(names);
    if(length>2){
      var fileName = names.join(', ');
      $(this).closest('.form-group').find('.form-control').attr("value",length+" files selected");
    }
    else{
      $(this).closest('.form-group').find('.form-control').attr("value",names);
    }
  });




} 

// showAlert(video_id){

// }

// onValueChange(event) {
//   console.log(event);
// }

onGenreChange(event) {
  this.genreValues.push(event.target.value);
  console.log(this.genreValues);
}

onLanguageChange(event) {
  this.languageValues.push(event.target.value);
  console.log(this.languageValues);
}

// onPhotoChange(event) {
//   this.uploadThumb.push(<File>event.target.files[0]);
//   console.log(this.uploadThumb);
// }


/*onPhotoChange(event) {

  if (event.target.files && event.target.files[0]) {

      let filesThumb = event.target.files.length;

      for (let i = 0; i < filesThumb; i++) {

              var reader = new FileReader();

              reader.onload = (event:any) => {

                // console.log(event.target.result);

                 this.uploadThumb.push(event.target.result); 
                 this.editcrtForm.patchValue({

                    fileSource: this.uploadThumb

                 });

              }

              reader.readAsDataURL(event.target.files[i]);

      }
      console.log("from ts");
      console.log(this.uploadThumb);
  }

}*/




onVideoUpload(event) {
  this.video=(<File>event.target.files[0]);
  console.log(this.video);
}

onPhotoUpload(event) {
  this.image=(<File>event.target.files[0]);
  console.log(this.image);
}

getGenreList() {
  // 
  var action_type = 'genreList';
  this.dataService.getGenreList(action_type).subscribe((result) => {
  this.frutas = result.data;
  console.log(this.frutas);
  });
  return this.frutas;
}

getLanguageList() { 
    var action_type = 'languageList';
    this.dataService.getLanguageList(action_type).subscribe((result) => {
    this.carros = result.data;
    });
    return this.carros;
  }


editcreatordata(editcrtForm) {
  //console.log('editcrtForm');
  
  //console.log(this.video);
  // console.log(this.uploadThumb);

    // if (this.video_title.status == 'INVALID') {
    //   alert('Please Enter Title');
    //   $('#video_title').focus();
    // }
    // else if (this.video_desc.status == 'INVALID') {
    //   alert('Please Enter Description');
    //   $('#video_desc').focus();
    // }
    // else if (this.year.status == 'INVALID') {
    //   alert('Please Enter Year');
    //   $('#year').focus();
    // }
    // else if (this.cast.status == 'INVALID') {
    //   alert('Please Enter Cast');
    //   $('#cast').focus();
    // }
    // else if (this.writer.status == 'INVALID') {
    //   alert('Please Enter Writer');
    //   $('#writer').focus();
    // }
    // else if (this.camera.status == 'INVALID') {
    //   alert('Please Enter Photographer and cameragrapher');
    //   $('#camera').focus();
    // }
    // else if (this.runtime.status == 'INVALID') {
    //   alert('Please Mention running time');
    //   $('#runtime').focus();
    // }
    // else if (this.audience.status == 'INVALID') {
    //   alert('Please tick the proper audience');
    //   $('#audience').focus();
    // }
    // else if (this.selectedFile.status == 'INVALID') {
    //   alert('Please upload profile picture');
    //   $('#selectedFile').focus();
    // }
    // else{
      /*this.dataService.posteditCreatorForm(this.video,editcrtForm.video_title,editcrtForm.video_desc,this.uploadThumb,editcrtForm.genreList,editcrtForm.languageList, editcrtForm.year, editcrtForm.cast,editcrtForm.director,editcrtForm.writer,editcrtForm.photo,editcrtForm.camera,editcrtForm.runtime,editcrtForm.audiance); */

      this.dataService.postEditCreatorForm(this.video,editcrtForm.video_title,editcrtForm.video_desc,this.image,editcrtForm.genreList,editcrtForm.languageList, editcrtForm.year, editcrtForm.cast,editcrtForm.director,editcrtForm.writer,editcrtForm.photo,editcrtForm.camera,editcrtForm.runtime,editcrtForm.audiance).subscribe((res)=>{
        console.log(res);
        });;
      
      // this.router.navigate(['/']);
    // }

  }

  

}
