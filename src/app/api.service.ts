import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  redirectUrl: string;
  baseUrl:string = "http://3.0.255.31/NS/php";
  baseUrlApi:string = "http://3.0.255.31/NS/newoadmin/api";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  user_data:any;
  previewData:object;  //knockout file

  constructor(private httpClient : HttpClient,private route:Router) { }

  public userlogin(email, password) {
    return this.httpClient.post<any>(this.baseUrlApi + '/login', { email, password })
    // return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
    .pipe(map(Users => {
    //alert(JSON.stringify(Users));
    this.setToken(Users[0].email);
   

    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public userregistration(name,phone,email,pwd) {
    return this.httpClient.post<any>(this.baseUrlApi + '/signup', { name, phone, email, pwd })
    // return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, phone, email, pwd })
    .pipe(map(Users => {
    this.setToken(email);
    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public payment_ott(type) {
    var useremail:string = this.getToken();
	//alert(useremail);
     return this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,useremail });
  }

  public usersubscribe(netwood_email,games_email,starhunt_email) {
    
    var primary:string=this.getToken();
	
    var netwoodemail:string = netwood_email;
    var gamesemail:string = games_email;
    var starhuntemail:string = starhunt_email;
	
	var count:number=0;
    if(primary==netwoodemail) count++;
    if(primary==gamesemail) count++;
    if(primary==starhuntemail) count++;
    if(count==0)
		alert("subscribe atleast one primary numbr");
    else 
		return this.httpClient.post<any>(this.baseUrl + '/usersubscription.php', { primary,netwoodemail,gamesemail,starhuntemail }); 
	 
  }
  
  
  public checkOtt(ott){
	var loggedEmail:string=this.getToken();
	var type:string = ott;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail }); 
  }
  
  public checkGame(game){
	var loggedEmail:string=this.getToken();
	var type:string = game;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail }); 
  }
  
  public checkStarhunt(star){
	var loggedEmail:string=this.getToken();
	var type:string = star;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail }); 
  }

  public ott_sso_register(ott_username){
    var type:string = 'register';
    return this.httpClient.post<any>(this.baseUrl + '/ott_sso.php', { type,ott_username }); 
  }

  public ott_sso_login(ott_username){
    return this.httpClient.post<any>(this.baseUrl + '/ott_sso.php', { ott_username }); 
  }

	

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
  
  /* list:any;
    this.taskapi.usersubscribe().subscribe((response)=>{
         this.list = response;
        //here you will get the response
		console.warn(list);
    }); */


    //rohit
    public cheak_email(email,action){
      let check_email:string=email;
      let action_type:string=action;
      return this.httpClient.get<any>(this.baseUrl+'/audition_phase.php',{params:{check_email,action_type}});
    
    }
    public getApplyfor(applicantage,action){
      // alert(applicantage);
      let applicant_age:string = applicantage;
      let action_type:string=action;
      // alert(applicant_age);
      return this.httpClient.get<any>(this.baseUrl +'/audition_phase.php', {params:{applicant_age,action_type}});

    }

    //audition form data
    public postAuditionForm(action,name,phone1,whatsapp_no,email,gender,dob,years,pin,address,state,guardian,guardian_relation,guardian_mobile,aud_type,applyFor,applyValue,phase,venuename,venuDate){
 
      var name:any=name;
      var phone1:any=phone1;
      var whatsapp_no:any=whatsapp_no;
      var email:any=email;
      var gender:any=gender;
      var dob:any=dob;
      var years:any=years;
      var pin:any=pin;
      var address:any=address;
      var state:any=state;
      var guardian:any=guardian;
      var guardian_relation:any=guardian_relation;
      var guardian_mobile:any=guardian_mobile;
      var aud_type:any=aud_type;
      var applyFor:any=applyFor;
      var applyValue:any=applyValue;
      var phase:any=phase;
      var venuename:any=venuename;
      var venuDate:any=venuDate;
 


    return this.httpClient.post<any>(this.baseUrl+'/audition_form_submit.php',{action,name,phone1,whatsapp_no,email,gender,dob,years,pin,address,state,guardian,guardian_relation,guardian_mobile,aud_type,applyFor,applyValue,phase,venuename,venuDate})

    // return this.httpClient.post<any>(this.baseUrl+'/audition_form_submit.php',{action:Text,name:Text,phone1:Text,whatsapp_no:Text,email:Text,gender:Text,dob:Text,years:Text,pin:Text,address:Text,state:Text,guardian:Text,guardian_relation:Text,guardian_mobile:Text,applyFor:Text,applyValue:Text,phase:Text,venuename:Text,venuDate:Text})
    }

   
    // user profile
    public userprofile(local_email){
      let action_type:string="fetch_user_data";
      let email:any=local_email;
      // return this.httpClient.post<any>(this.baseUrl+'/userprofile.php',{action_type,email});
      return this.httpClient.get<any>(this.baseUrlApi+'/userprofile',{params:{email}}); 
    }
    
    public fetch_submission_data(local_email){
      let action_type:string="fetch_sub_data";
      let email:any=local_email;
      return this.httpClient.post<any>(this.baseUrl+'/userprofile.php',{action_type,email});
    }

    public sendData(data){
      this.user_data=data;
    }
    public acceptData(){
      return this.user_data;
    }

    public uploadUserImage(file){
      const formData: FormData = new FormData();
      formData.append('file',file, file.name);
      formData.append('action_type',"profile_pic");
      formData.append('user_email',this.user_data.email);
      formData.append('user_reg_id',this.user_data.reg_id);
      return this.httpClient.post<any>(this.baseUrl+'/userprofile_pic.php',formData).subscribe((res)=>{
        // console.log(res.status);
      });
    }
    public photoIdentityProof(file,photoidType){
      const docformData:FormData=new FormData();
      docformData.append('file',file, file.name);
      docformData.append('photoidType',photoidType);
      docformData.append('user_email',this.user_data.email);
      docformData.append('user_reg_id',this.user_data.reg_id);
      docformData.append('action_type',"upload_photo_id");
      return this.httpClient.post<any>(this.baseUrl+'/userprofile_pic.php',docformData).subscribe((res)=>{
        // console.log(res.status);
      })
    }

    public ageIdentityProof(file,ageidType){
      const ageformData:FormData=new FormData();
      ageformData.append('file',file, file.name);
      ageformData.append('ageidType',ageidType);
      ageformData.append('user_email',this.user_data.email);
      ageformData.append('user_reg_id',this.user_data.reg_id);
      ageformData.append('action_type',"upload_age_id");
      return this.httpClient.post<any>(this.baseUrl+'/userprofile_pic.php',ageformData).subscribe((res)=>{
        // console.log(res.status);
      })
      

    }
    public submitKnockoutFile(file){
      const email=localStorage.getItem('token');
      const knockoutForm:FormData=new FormData();
      knockoutForm.append('file',file, file.name);
      knockoutForm.append('action_type','submit_knockoutfile');
      knockoutForm.append('user_email',email);
      return this.httpClient.post<any>(this.baseUrl+'/userfile_submit.php',knockoutForm)
    }
    public submitSemiFinalFile(file){
      const email=localStorage.getItem('token');
      const semiFinalForm:FormData=new FormData();
      semiFinalForm.append('file',file, file.name);
      semiFinalForm.append('user_email',email);
      semiFinalForm.append('action_type','submit_semifinalfile');
      return this.httpClient.post<any>(this.baseUrl+'/userfile_submit.php',semiFinalForm)

    }
    public submitFinalFile(file){
      const email=localStorage.getItem('token');
      const finalForm:FormData=new FormData();
      finalForm.append('file',file, file.name);
      finalForm.append('user_email',email);
      finalForm.append('action_type','submit_finalfile');
      return this.httpClient.post<any>(this.baseUrl+'/userfile_submit.php',finalForm)
    }
    public fromRounds(id,judge_id,action_type){
      const fetchdata=new FormData();
      fetchdata.append('id',id);
      fetchdata.append('judge_id',judge_id);
      fetchdata.append('action_type',action_type);
      return this.httpClient.post<any>(this.baseUrl+'/user_submitted_file.php',fetchdata).subscribe((res)=>{
        this.previewData=res;
        this.route.navigate(['/userpreview']);
      });

    }
    public getValueForPreview(){
      return this.previewData;
    }


    public checkKnockoutResult(action_type){
      const local_email=localStorage.getItem('token');
      return this.httpClient.post<any>(this.baseUrl+'/candidate_aud_result.php',{local_email,action_type});
    }
    public checkSemiFinalResult(action_type){
      const local_email=localStorage.getItem('token');
      return this.httpClient.post<any>(this.baseUrl+'/candidate_aud_result.php',{local_email,action_type});
    }
    public checkFinalResult(action_type){
      const local_email=localStorage.getItem('token');
      return this.httpClient.post<any>(this.baseUrl+'/candidate_aud_result.php',{local_email,action_type});
    }
    public fetchCreatorsDetails(){
      const action_type:string="fetch_creators_details"
      return this.httpClient.post<any>(this.baseUrl+'/fetch_creatots_details.php',{action_type});
      
    }
    public fetchCreatorVideoData(video_code){
      let action_type="fetch_cretor_video";
      return this.httpClient.post<any>(this.baseUrl+'/fetch_creatots_details.php',{video_code,action_type});
    }
    
}
