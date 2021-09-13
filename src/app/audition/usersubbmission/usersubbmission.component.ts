import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usersubbmission',
  templateUrl: './usersubbmission.component.html',
  styleUrls: ['./usersubbmission.component.css']
})
export class UsersubbmissionComponent implements OnInit {
  user_data:any;
  profie_pic_src:string;
  knockoutFile:File;
  semiFinalFile:File;
  finalFile:File;

  k_file_name:string="No file selected";
  s_file_name:string="No file selected";
  f_file_name:string="No file selected";
 
  constructor(private dataService:ApiService) { }

  ngOnInit(): void {
    this.user_data = this.dataService.acceptData();
    if(this.user_data.picture!=null){
      this.profie_pic_src="http://localhost/NSD/image/userprofile_img/"+(this.user_data.picture);
    }

    //for knonout
    $("#k_icon").click(function () {
      $("input[type='file']#k_file").trigger('click');
    });
    //for semifinal
    $("#s_icon").click(function () {
      $("input[type='file']#s_file").trigger('click');
    });
     //for final
     $("#f_icon").click(function () {
      $("input[type='file']#f_file").trigger('click');
    });
  }
  onKnockOutFileSubmit(event){
    this.knockoutFile=<File>event.target.files[0];
    console.log(this.knockoutFile);
    this.k_file_name=this.knockoutFile.name;
    this.dataService.submitKnockoutFile(this.knockoutFile);
  }
  onSemiFinalFileSubmit(event){
    this.semiFinalFile=<File>event.target.files[0];
    console.log(this.semiFinalFile);
    this.s_file_name=this.semiFinalFile.name;
    this.dataService.submitSemiFinalFile(this.semiFinalFile);
  }
  onFinalFileSubmit(event){
    this.finalFile=<File>event.target.files[0];
    this.f_file_name=this.finalFile.name;
    this.dataService.submitFinalFile(this.finalFile);
  }
  fromKnonkout(e){
  e.preventDefault();
  this.dataService.fromRounds(this.user_data.id,'from_knockout');
  }
  fromSemiFinal(e){
    e.preventDefault();
    console.log(" semi click");
    this.dataService.fromRounds(this.user_data.id,'from_semifinal');
  }
  fromFinal(e){
    e.preventDefault();
    console.log("final click");
    this.dataService.fromRounds(this.user_data.id,'from_final');
  }

 
 

}
