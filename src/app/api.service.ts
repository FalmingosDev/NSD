import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string;
  baseUrl:string = "https://newocoin.app/php";
  // baseUrl:string = "http://3.0.255.31/NS/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  user_data:any; 
  previewData:object;  //knockout file

  data: any;
  env= environment;

  constructor(private httpClient : HttpClient,private route:Router) { }

  public userlogin(email, password,lat,lng) {
     //alert(mobile);
     //alert(password);
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email,password,lat,lng })
    /*.pipe(map(Users => {
    // alert(JSON.stringify(Users));

     this.setToken(Users[0].email);

    this.getLoggedInName.emit(true);
    return Users;
    })
    )*/;
  }


  public userregistration(action_type,name,countryList,phone,email,pwd) {
    // console.log(action_type);
    const signupFrmData: FormData = new FormData();
    signupFrmData.append('action_type',action_type);
    signupFrmData.append('name',name);
    signupFrmData.append('countryList',countryList);
    signupFrmData.append('phone',phone);
    signupFrmData.append('email',email);    
    signupFrmData.append('pwd',pwd);
    
    return this.httpClient.post<any>(this.baseUrl + '/register.php',signupFrmData )
    .pipe(map(Users => {
    this.setToken(email);
    console.log(countryList);
    localStorage.setItem('country_code', countryList);
    
    // this.getLoggedInName.emit(true);
    console.log(Users);
    return Users;
    }));
  }

  public getCountryList(action_type){
    return this.httpClient.get<any>(this.baseUrl +'/register.php', {params:{action_type}});
  }
  public getISD(action_type){
    return this.httpClient.get<any>(this.baseUrl +'/register.php', {params:{action_type}});
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

  public userSubcription(){
    var loggedEmail:string=this.getToken();
    let type:string = 'checkSubcription';
    return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail});
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
  
  // public checkStarhunt(star){
	// var loggedEmail:string=this.getToken();
	// var type:string = star;
	// return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail }); 
  // }

  public ott_sso_register(ott_username){
    var type:string = 'register';
    return this.httpClient.post<any>(this.baseUrl + '/ott_sso.php', { type,ott_username }); 
  }

  public ott_sso_login(ott_username){
    return this.httpClient.post<any>(this.baseUrl + '/ott_sso.php', { ott_username }); 
  }
  
  public userInSubcription(loggedEmail){
	  let type:string = 'checkUserSubcription';
    return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedEmail});
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
    localStorage.removeItem('country_code');
    localStorage.removeItem('subscription_end_date');

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

    public sendData(data){
      this.user_data=data;
    }
    public acceptData(){
      return this.user_data;
    }
   
    public getValueForPreview(){
      return this.previewData;
    }
    
    public fetchCreatorsDetails(){
      const action_type:string="fetch_creators_details"
      return this.httpClient.post<any>(this.baseUrl+'/fetch_creatots_details.php',{action_type});
      
    }

    /*----------- Service Durba Start ------------ */

    public postCreatorForm(creator_user_name,email,creator_dob,creator_topic,creator_desc,creator_profile_pic){

      const formData: FormData = new FormData();
      formData.append('creator_user_name',creator_user_name);
      formData.append('creator_topic',creator_topic);
      formData.append('creator_desc',creator_desc);
      formData.append('creator_dob',creator_dob);
      formData.append('email',email);
      formData.append('file',creator_profile_pic, creator_profile_pic.name);
      
 


    return this.httpClient.post<any>(this.baseUrl+'/creator_form_submit.php',formData).subscribe((res)=>{
      alert(res.msg);
    })

    }

    public checkCreator(email){
      // alert (email);
      const action_type="check_creator";
      return this.httpClient.post<any>(this.baseUrl+'/creator_check.php',{email,action_type}).subscribe((res)=>{
        if(res.status ==="user_exists"){
          alert("You have already joined as creator");
          this.route.navigate(['/creatorcontent']);
        }
        else{
          alert("Welcome to creator page");
          this.route.navigate(['/joinascreator']);
        }
      })
  

    }


    public postAddCreatorForm(video,video_title,video_desc,image,genreList,languageList,year,cast,director,writer,camera,runtime,audiance){
     
      const email = localStorage.getItem('token');
      const creatorformData: FormData = new FormData();

      creatorformData.append('email',email);

      creatorformData.append('action_type',"creatorVideoSubmit");
      creatorformData.append('file',video);
      creatorformData.append('video_title',video_title);
      creatorformData.append('video_desc',video_desc);
      creatorformData.append('img',image);
      creatorformData.append('genreList',genreList);
      creatorformData.append('languageList',languageList);
      creatorformData.append('year',year);
      creatorformData.append('cast',cast);
      creatorformData.append('director',director);
      creatorformData.append('writer',writer);
      creatorformData.append('camera',camera);
      creatorformData.append('runtime',runtime);
      creatorformData.append('audiance',audiance);
        // console.log(creatorformData);

      return this.httpClient.post<any>(this.baseUrl+'/add_creator_form_submit.php',creatorformData);
      
     }

    public getGenreList(action_type){
      return this.httpClient.get<any>(this.baseUrl +'/add_creator_form_submit.php', {params:{action_type}});
    }
    
    public getLanguageList(action_type){
      return this.httpClient.get<any>(this.baseUrl +'/add_creator_form_submit.php', {params:{action_type}});
    }

    public creatorList(action_type){
	  const email=localStorage.getItem('token');
      return this.httpClient.get<any>(this.baseUrl +'/creator_detail.php', {params:{email,action_type}});
    }

    public creatorContentDetail(id){
      const action_type="creator_content_details";
      const detailformData: FormData = new FormData();
      detailformData.append('action_type',action_type);
      detailformData.append('id',id);
      return this.httpClient.post<any>(this.baseUrl+'/creator_detail.php',detailformData);
    }

    public fetchCreatorData(id){
      const action_type="fetch_creator_data";
     return this.httpClient.get<any>(this.baseUrl +'/creator_detail.php',  {params:{id,action_type}});
   
    }

    public postEditCreatorForm(id,video,video_title,video_desc,image,genreList,languageList,year,cast,director,writer,camera,runtime,audiance){
      console.log("video_title"+video_title);
      const creatorformData: FormData = new FormData();
      creatorformData.append('id',id);
      creatorformData.append('action_type',"editCreatorVideo");
      creatorformData.append('file',video);
      creatorformData.append('video_title',video_title);
      creatorformData.append('video_desc',video_desc);
      creatorformData.append('img',image);
      creatorformData.append('genreList',genreList);
      creatorformData.append('languageList',languageList);
      creatorformData.append('year',year);
      creatorformData.append('cast',cast);
      creatorformData.append('director',director);
      creatorformData.append('writer',writer);
      creatorformData.append('camera',camera);
      creatorformData.append('runtime',runtime);
      creatorformData.append('audiance',audiance);
      return this.httpClient.post<any>(this.baseUrl+'/add_creator_form_submit.php',creatorformData);
        
    }
 /* ---------------- Service Durba End --------------------*/
    public fetchCreatorVideoData(video_code){
      let action_type="fetch_cretor_video";
      return this.httpClient.post<any>(this.baseUrl+'/fetch_creatots_details.php',{video_code,action_type});
    }

    public handelCreateEncryption(objUserData){
      return this.httpClient.post<any>(this.baseUrl+'/payment.php',{userdata:objUserData});
    }

    public fetchVideoData(slug){
      const action_type="fetch_watch_details";
     return this.httpClient.get<any>(this.baseUrl +'/fetch_watch_details.php',  {params:{action_type,slug}});

    }

  public paymentResponse(){
    // return this.httpClient.get<any>(this.baseUrl +'/payment_response.php',  {params:{action_type:"payment_success"}});
    return this.httpClient.get<any>('https://newocoin.app/#/payment_success');
  }

  public profileData(local_email){
    let action_type:string="fetch_profile_data";
    let email:any=local_email;
    return this.httpClient.post<any>(this.baseUrl+'/profile.php',{action_type,email});
    
  }


  public chngpwdForm(email,old_password,new_password){ 
    let action_type="change_password";
    // const formData: FormData = new FormData();
    // formData.append('new_password',new_password);
    // return this.httpClient.post<any>(this.baseUrl+'/profile.php',formData);

    return this.httpClient.post<any>(this.baseUrl +'/profile.php', {action_type,email,old_password,new_password});
      
  }

  public chngphnForm(email,new_phone,otp){
    
    let action_type="change_phone";

    return this.httpClient.post<any>(this.baseUrl +'/profile.php', {action_type,email,new_phone,otp});

  }

  public otpGenerate(email){
    let action_type="otp";
    return this.httpClient.post<any>(this.baseUrl +'/profile.php', {action_type,email});
  }

  public businessList(){
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49c9715ef8634e48842df52e0451504f');
  }

  public entertainmentList(){
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=49c9715ef8634e48842df52e0451504f');
  }

   public sportsList(){
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=49c9715ef8634e48842df52e0451504f');
  }

 
  public topList(){
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=49c9715ef8634e48842df52e0451504f');
  }

  public ottBannerList(){
    return this.httpClient.get<any>(this.env.laravel_api_url+'showbanner');
  }

  public ottShortsList(){
    return this.httpClient.get<any>(this.env.laravel_api_url+'showshorts');
  }

  public ottMusicList(){
    return this.httpClient.get<any>(this.env.laravel_api_url+'showmusic');
  }

  public ottVideoDetail(id){
    return this.httpClient.get<any>(this.env.laravel_api_url+'showvideodetail/'+id);
  }


  // https://www.newocoin.app/newoadmin/api/showmusic
  // https://www.newocoin.app/newoadmin/api/showwebs
  // https://www.newocoin.app/newoadmin/api/showmovie


}
