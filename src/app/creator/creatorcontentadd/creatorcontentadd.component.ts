import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-creatorcontentadd',
  templateUrl: './creatorcontentadd.component.html',
  styleUrls: ['./creatorcontentadd.component.css']
})
export class CreatorcontentaddComponent implements OnInit {

  local_email:string="";

  addcrtForm: FormGroup;
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


  constructor(private dataService: ApiService, private router: Router) { }

  ngOnInit(): void {

    const email = localStorage.getItem('token');
    this.local_email=email;

    this.addcrtForm = new FormGroup({
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
                   this.addcrtForm.patchValue({

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

    get video_title() { return this.addcrtForm.get('video_title') }
    get video_desc() { return this.addcrtForm.get('video_desc') }
    get video_thumb() { return this.addcrtForm.get('video_thumb') }
    get genre() { return this.addcrtForm.get('genreList') }
    get language() { return this.addcrtForm.get('languageList') }
    get year() { return this.addcrtForm.get('year') }
    get cast() { return this.addcrtForm.get('cast') }
    get director() { return this.addcrtForm.get('director') }
    get writer() { return this.addcrtForm.get('writer') }
    get camera() { return this.addcrtForm.get('camera') }
    get runtime() { return this.addcrtForm.get('runtime') }
    get audiance() { return this.addcrtForm.get('audiance') }


  addcreatordata(addcrtForm) {
    //console.log('addcrtForm');
    
    //console.log(this.video);
    // console.log(this.uploadThumb);
      if (!this.video) {
        alert('Please upload a video');
        $('#video').focus();
      }
      else if (this.video_title.status == 'INVALID') {
        alert('Please Enter Title');
        $('#video_title').focus();
      }
      else if (this.video_desc.status == 'INVALID') {
        alert('Please Enter Description');
        $('#video_desc').focus();
      }
      else if (!this.image) {
        alert('Please upload a thumbnail');
        $('#image').focus();
      }
      else if (this.genre.status == 'INVALID') {
        alert('Please Enter genre');
        $('#genreList').focus();
      }
      else if (this.language.status == 'INVALID') {
        alert('Please Enter language');
        $('#languagList').focus();
      }
      else if (this.year.status == 'INVALID') {
        alert('Please Enter Year');
        $('#year').focus();
      }
      else if (this.cast.status == 'INVALID') {
        alert('Please Enter Cast');
        $('#cast').focus();
      }
      else if (this.director.status == 'INVALID') {
        alert('Please Enter Director');
        $('#director').focus();
      }
      else if (this.writer.status == 'INVALID') {
        alert('Please Enter Writer');
        $('#writer').focus();
      }
      else if (this.camera.status == 'INVALID') {
        alert('Please Enter Photographer and Cameragrapher');
        $('#camera').focus();
      }
      else if (this.runtime.status == 'INVALID') {
        alert('Please Mention running time');
        $('#runtime').focus();
      }
      else if (this.audiance.status == 'INVALID') {
        alert('Please tick the proper audience');
        $('#audiance').focus();
      }
     
      else{
            this.dataService.postAddCreatorForm(this.video,addcrtForm.video_title,addcrtForm.video_desc,this.image,addcrtForm.genreList,addcrtForm.languageList, addcrtForm.year, addcrtForm.cast,addcrtForm.director,addcrtForm.writer,addcrtForm.camera,addcrtForm.runtime,addcrtForm.audiance);
        
        this.router.navigate(['/creatorcontent']);
      }
  
    }



}
