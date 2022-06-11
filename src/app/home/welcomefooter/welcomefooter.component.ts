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
                 
      });
    }
    else{      
      this.router.navigate(['/about_newoclan']);   
    }
  }

}
