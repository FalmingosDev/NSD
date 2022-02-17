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

  // checkProfile(){
  //   if(localStorage.getItem('token')){
  //     this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
  //       // if(value=='newoclan'){
  //         // if(res.cnt ==1){
  //           this.router.navigate(['/profile']);
  //         // }else{
  //         //   this.router.navigate(['/pricing']);
  //         // }
  //       // }
  //       // else if(value=='profile'){
  //       //     this.router.navigate(['/profile']);
  //       // } 
        
  //     });
  //   }
  //   else{
  //     alert('You need to Log in first!');
  //     this.router.navigate(['/login']);   
  //   }
  // }

  checkProfile(){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
            this.router.navigate(['/profile']);        
      });
    }
    else{
      alert('You need to Log in first!');
      this.router.navigate(['/login']);   
    }
  }

}
