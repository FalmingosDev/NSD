import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usersubbmission',
  templateUrl: './usersubbmission.component.html',
  styleUrls: ['./usersubbmission.component.css']
})
export class UsersubbmissionComponent implements OnInit {
  user_data: any;
  user_data2: any;
  profie_pic_src: string = "assets/images/defaul-profile-image.png";
  knockoutFile: File;
  semiFinalFile: File;
  finalFile: File;

  k_file_name: string = "No file selected";
  s_file_name: string = "No file selected";
  f_file_name: string = "No file selected";

  isKnockout_btn: boolean = true;
  isSemiFinal_btn: boolean = true;
  isFinal_btn: boolean = true;

  isKnockout_play: boolean = false;
  isSemiFinal_play: boolean = false;
  isFinal_play: boolean = false;

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.user_data = this.dataService.acceptData();
    const local_email = localStorage.getItem('token');
    this.dataService.userprofile(local_email)
      .subscribe((res) => {
        this.user_data2 = res.data;
        console.log(this.user_data2.picture);
        if (this.user_data2.picture != null) {
          this.profie_pic_src = "http://localhost/NSD/image/userprofile_img/" + (this.user_data2.picture);
        }

        if (this.user_data2.submission1 == "1") {
          this.isKnockout_btn = false;
          this.isKnockout_play = true;

        }

        if (this.user_data2.submission2 == "1") {
          this.isSemiFinal_btn = false;
          this.isSemiFinal_play = true;
        }
        if (this.user_data2.submission3 == "1") {
          this.isFinal_btn = false;
          this.isFinal_play = true;
        }
      });

    






    // if(this.user_data.submission1=="1"){
    //   this.isKnockout_btn=false;
    //   this.isKnockout_play=true;

    // }

    // if(this.user_data.submission2=="1"){
    //   this.isSemiFinal_btn=false;
    //   this.isSemiFinal_play=true;
    // }
    // if(this.user_data.submission3=="1"){
    //   this.isFinal_btn=false;
    //   this.isFinal_play=true;
    // }


  }


  onClick_k() {        //for knonout
    $("input[type='file']#k_file").trigger('click');
  }
  onClick_s() {      //for semi
    $("input[type='file']#s_file").trigger('click');
  }
  onClick_f() {    //for final
    $("input[type='file']#f_file").trigger('click');
  }



  onKnockOutFileSubmit(event) {
    this.knockoutFile = <File>event.target.files[0];
    console.log(this.knockoutFile);
    this.k_file_name = this.knockoutFile.name;
    this.dataService.submitKnockoutFile(this.knockoutFile).subscribe((res) => {
      // console.log(res.status);
      if (res.status == "successfull") {
        this.isKnockout_btn = false;
        this.isKnockout_play = true;
        alert("You Successfully Submitted your file for knockout round");
      }
    });
  }
  onSemiFinalFileSubmit(event) {
    this.semiFinalFile = <File>event.target.files[0];
    console.log(this.semiFinalFile);
    this.s_file_name = this.semiFinalFile.name;
    this.dataService.submitSemiFinalFile(this.semiFinalFile).subscribe((res) => {
      if (res.status == "successfull") {
        this.isSemiFinal_btn = false;
        this.isSemiFinal_play = true;
        alert("You Successfully Submitted your file for Semifinal round");
      } else {
        alert("Submission Unsuccessfull");
      }
    });
  }
  onFinalFileSubmit(event) {
    this.finalFile = <File>event.target.files[0];
    this.f_file_name = this.finalFile.name;
    this.dataService.submitFinalFile(this.finalFile).subscribe((res) => {
      if (res.status == "successfull") {
        this.isFinal_btn = false;
        this.isFinal_play = true;
        alert("You Successfully Submitted your file for Semifinal round");
      }
      else {
        alert("Submission Unsuccessfull");
      }
    });
  }
  fromKnonkout(e) {
    e.preventDefault();
    this.dataService.fromRounds(this.user_data.id, 'from_knockout');
  }
  fromSemiFinal(e) {
    e.preventDefault();
    console.log(" semi click");
    this.dataService.fromRounds(this.user_data.id, 'from_semifinal');
  }
  fromFinal(e) {
    e.preventDefault();
    console.log("final click");
    this.dataService.fromRounds(this.user_data.id, 'from_final');
  }




}
