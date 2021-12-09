import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usersubbmission',
  templateUrl: './usersubbmission.component.html',
  styleUrls: ['./usersubbmission.component.css']
})
export class UsersubbmissionComponent implements OnInit {
  // base_file_url:string="http://3.0.255.31/NS/uploads/"
  base_file_url:string="http://newostreet.flamingostech.com/uploads/"
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

  isknockout_box:boolean=true;
  issemiFinal_box:boolean=false;
  isfinal_box:boolean=false;
  
  knockOutMsg:string;
  semiFinalMsg:string;
  finalMsg:string;


  k_judge_data:string;
  k_action_type_data:string;
  semiFinal_data:string;
  final_data:any;

  cmt_1:string="Congratulations! You have been selected for the next round";
  jury_dislike_cmt:string=" oeeeeeeeeeeeeeeeWe regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Season 1 : Online. However, you will be informed when Netwood Stars Hunt Season 2 starts. You have the opportunity to participate in next Season without any additional charges.";
  judge_dislike_cmt:string="We regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Season 1 : Online. However, you will be informed when Netwood Stars Hunt Season 2 starts. You have the opportunity to participate in next Season without any additional charges.";
  judge_like_cmt:string="Awesome! You have been selected for Semifinals.";
  semi_dislike_cmt:string="We regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Season 1 : Online.\n You will be provided one year subscription of Netwood OTT  soon which you can login using your registered mobile number" ;
   semi_like_cmt:string="Congratulations! You have been selected for the Final round.";    
   final_dislike_cmt:string="We regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Season 1 : Online Final. You will be provided one year subscription of Netwood OTT soon which you can login using your registered mobile number";
   final_like_cmt="Congratulations! You are the winner for Netwood Stars Hunt Season 1 ";
   
  
               

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.user_data = this.dataService.acceptData();

    const local_email = localStorage.getItem('token');
    this.dataService.userprofile(local_email)
      .subscribe((res) => {
        this.user_data2 = res.data;
        console.log(this.user_data2.picture);
        if (this.user_data2.picture != null) {
          this.profie_pic_src = this.base_file_url+"userprofile_img/" + (this.user_data2.picture);
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


      //for audition result
      this.dataService.checkKnockoutResult("check_juryallocation_result").subscribe((res)=>{
       
        if(res.jury_allocation.react)
        {
          if(res.jury_allocation.react=="Dislike")
          {
            this.k_judge_data=res.jury_allocation.jury_id;
            this.k_action_type_data="from_knockout_jury";
            this.knockOutMsg=this.jury_dislike_cmt;
          }
          else if(res.jury_allocation.react=="Like")
          {
            
            this.dataService.checkKnockoutResult("check_judgeallocation_result").subscribe((res)=>{
              this.k_judge_data=res.judge_allocation.judge_id;
              this.k_action_type_data="from_knockout_mentor";
              if(res.judge_allocation.react)
              {
                if(res.judge_allocation.react=="Dislike")
                {
                  this.knockOutMsg=this.judge_dislike_cmt;
                }else if(res.judge_allocation.react=="Like")
                {
                  this.issemiFinal_box=true;
                  this.knockOutMsg=this.judge_like_cmt;
                  this.dataService.checkSemiFinalResult("check_semi_mentor_result").subscribe((res)=>{
                    this.semiFinal_data=res.semi_allocation.judge_id;
                    if(res.semi_allocation.react)
                    {
                      if(res.semi_allocation.react=="Dislike"){
                        this.semiFinalMsg=this.semi_dislike_cmt;

                      }
                      else if(res.semi_allocation.react=="Like")
                      {
                        this.isfinal_box=true; 
                        this.semiFinalMsg=this.semi_like_cmt;
                        this.dataService.checkFinalResult("check_final_mentor_result").subscribe((res)=>{
                          this.final_data=res.final_allocation.judge_id;
                          if(res.final_allocation.react)
                          {
                              if(res.final_allocation.react=="Dislike")
                              {
                                this.finalMsg=this.final_dislike_cmt;
                              }
                              else if(res.final_allocation.react=="Like"){
                                this.finalMsg=this.final_like_cmt+" Phase "+this.user_data.phase+" "+this.user_data.aud_type;
                              
                              }
                          }                 
                        });

                      }
                    }
                  });
                }
              }
            });
  
  
          }
          else
          {
             this.knockOutMsg="Jury Unchecked";
          }
        }
      });
//We regret to inform you that you have not been selected this time for the Netwood Stars Hunt, Season 1 : Online. However, you will be informed when Netwood Stars Hunt Season 2 starts. You have the opportunity to participate in next Season without any additional charges
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
    console.log(this.k_judge_data);
    console.log(this.k_action_type_data);
     this.dataService.fromRounds(this.user_data.id,this.k_judge_data,this.k_action_type_data);
  }
  fromSemiFinal(e){
    e.preventDefault();
    this.dataService.fromRounds(this.user_data.id,this.semiFinal_data, 'from_semifinal');
  }
  fromFinal(e) {
    e.preventDefault();
    this.dataService.fromRounds(this.user_data.id,this.final_data, 'from_final');
  }




}
