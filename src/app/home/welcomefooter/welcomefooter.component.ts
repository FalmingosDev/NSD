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
  abc:any
  constructor(private router:Router,private dataService: ApiService) {
    
   }

  ngOnInit(): void {}

  checkAuthFooter(){
    this.abc =new WelcomeComponent(this.router,this.dataService).checkAuth();
  }

}
