import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-welcomefooter',
  templateUrl: './welcomefooter.component.html',
  styleUrls: ['./welcomefooter.component.css']
})
export class WelcomefooterComponent implements OnInit {
  constructor(private router:Router,private dataService: ApiService) {
    
   }

  ngOnInit(): void {}

  checkAuth(value='newoclan'){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(value=='newoclan'){
          if(res.cnt ==1){
            this.router.navigate(['/newoclan']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        }
        else if(value=='ott'){
          if(res.cnt ==1){
            this.router.navigate(['/otthome']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        }
        else if(value=='stars'){
          if(res.cnt ==1){
            this.router.navigate(['/stars']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='hash'){
          if(res.cnt ==1){
            this.router.navigate(['/hashtag']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='game'){
          if(res.cnt ==1){
            this.router.navigate(['/game']);
          }
          else{
            this.router.navigate(['/about_newoclan']);
          }
        } 
        else if(value=='profile'){
          this.router.navigate(['/profile']);
        }
        else if(value=='rewards'){
            if(res.cnt ==1){
              this.router.navigate(['/rewards']);
            }
            else{
              this.router.navigate(['/pricing']);
            }
        }
        else if(value=='referral'){
          if(res.cnt ==1){
            this.router.navigate(['/referral']);
          }
          else{
            this.router.navigate(['/about_referral']);
          }
        }       
      });
    }
    else{  
      if(value=='newoclan' || value=='ott' || value=='stars' || value=='hash' || value=='game'){    
        this.router.navigate(['/about_newoclan']);
      }
      else if(value=='profile'){
        this.router.navigate(['/login']);
      }
      else if(value=='referral'){
        this.router.navigate(['/about_referral']);
      } 
      else if(value=='rewards'){
        this.router.navigate(['/login']);
      }  
    }
  }

}
