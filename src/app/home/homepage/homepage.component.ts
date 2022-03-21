import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 4
     },
      480: {
       items: 4
     },
      940: {
       items: 4
     }
    },
   nav: false
  };

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) { };

  ngOnInit(): void {
  };



userSubcriptionOtt(){		
	this.dataService.getLoggedInName.subscribe();
    if(this.dataService.isLoggedIn())
    {
		this.dataService.userSubcription().subscribe((res)=>{
			if(res.code==1){
				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/otthome';
				this.router.navigate([redirect]); 
			}
			else{
				alert(res.msg);
				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/pricing';
				this.router.navigate([redirect]);
			}
		})
    }

  }

  userSubcriptionGame(){		
	this.dataService.getLoggedInName.subscribe();
    if(this.dataService.isLoggedIn())
    {
		this.dataService.userSubcription().subscribe((res)=>{
			if(res.code==1){
				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/game';
				this.router.navigate([redirect]); 
			}
			else{
				alert(res.msg);
				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/pricing';
				this.router.navigate([redirect]);
			}
		})
    }
}



  
//   checkForOtt(ott){		
// 	this.dataService.getLoggedInName.subscribe();
//     if(this.dataService.isLoggedIn())
//     {
// 		this.dataService.checkOtt(ott).subscribe((result)=>{
// 			if(result.code==1){
// 				//alert('User Subscription Successfully Completed!');
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/otthome';
// 				this.router.navigate([redirect]); 
// 				//window.location.href = 'https://www.netwood.tv/';
// 			}
// 			else{
// 				alert(result.msg);
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
// 				this.router.navigate([redirect]);
// 			}
			
// 		})
//     }
//     else{
// 		var chkMsg = confirm('You need to log in first!');
// 		if (chkMsg == true) {
// 			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'login';
// 			this.router.navigate([redirect]);
// 		} else {
// 			return false;
// 		}
		
//     }
//   }
  
//   checkForGame(game){		
// 	this.dataService.getLoggedInName.subscribe();
//     if(this.dataService.isLoggedIn())
//     {
// 		this.dataService.checkGame(game).subscribe((result)=>{
// 			if(result.code==1){
// 				/* alert('User Subscription Successfully Completed!');
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
// 				this.router.navigate([redirect]); */
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/game';
// 				this.router.navigate([redirect]);
// 			}
// 			else{
// 				alert(result.msg);
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
// 				this.router.navigate([redirect]);
// 			}
			
// 		})
//     }
//     else{
// 		var chkMsg = confirm('You need to log in first!');
// 		if (chkMsg == true) {
// 			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'login';
// 			this.router.navigate([redirect]);
// 		} else{
// 			return false;
// 		}
		
//     }
//   }
  
//   checkForStarhunt(star){		
// 	this.dataService.getLoggedInName.subscribe();
//     if(this.dataService.isLoggedIn())
//     {
// 		this.dataService.checkStarhunt(star).subscribe((result)=>{
// 			if(result.code==1){
// 				// alert('User Subscription Successfully Completed!');
// 				// window.location.href = 'https://www.netwood.tv/audition/';
// 				const local_email = localStorage.getItem('token');
// 				let action="check_email";
// 				this.dataService.cheak_email(local_email,action).subscribe((result)=>{
// 					if(result.starReg==1){
// 						//window.location.href = 'http://3.0.255.31/newo-street/audition/audition-user-home.html';
// 						const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'userhome';
// 				    	this.router.navigate([redirect]);
// 					}
// 					else{
// 						const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'auditionform';
// 				    	this.router.navigate([redirect]);
// 					}
// 				  });

// 			}
// 			else{
// 				alert(result.msg);
// 				const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
// 				this.router.navigate([redirect]);
// 			}
			
// 		})
//     }
//     else{
// 		var chkMsg = confirm('You need to log in first!');
// 		if (chkMsg == true) {
// 			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : 'login';
// 			this.router.navigate([redirect]);
// 		} else {
// 			return false;
// 		}
		
//     }
//   }

}
