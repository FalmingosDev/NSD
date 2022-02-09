import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  vidArr:any=["http://3.0.255.31/NS/assets/video/johnty-rodes.mp4","http://3.0.255.31/NS/assets/video/lara-dutta.mp4","http://3.0.255.31/NS/assets/video/sunil-grover.mp4"];
  assetsUrl:string = 'http://3.0.255.31/NS/assets'
  constructor(private router:Router,private dataService: ApiService) { }

  ngOnInit(): void {
  }
  checkAuth(value='newoclan'){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(value=='newoclan'){
          if(res.cnt ==1){
            this.router.navigate(['/newoclan']);
          }else{
            this.router.navigate(['/pricing']);
          }
        }else if(value=='profile'){
            this.router.navigate(['/profile']);
        } 
        
      });
    }
    else{
      alert('You need to log in first!');
      this.router.navigate(['/login']);   
    }
  }

}
