import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  email:string;

  constructor(private applyservice:ApiService,
               private router:Router) { }

  ngOnInit(): void {
    let local_email = localStorage.getItem('token');
    this.email=local_email;
    // console.log(this.router.url); // get current route

  }

}
