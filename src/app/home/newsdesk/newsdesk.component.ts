import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newsdesk',
  templateUrl: './newsdesk.component.html',
  styleUrls: ['./newsdesk.component.css']
})
export class NewsdeskComponent implements OnInit {
  newsDskOptBn: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 1
     }
    },
   nav: false
  };

  newsDskbusns: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:false,
    responsive: {
      0: {
       items: 2
     },
      480: {
       items: 2
     },
      940: {
       items: 2
     }
    },
   nav: false
  };

  newsDskEnt: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:false,
    responsive: {
      0: {
       items: 2
     },
      480: {
       items: 2
     },
      940: {
       items: 2
     }
    },
   nav: false
  };

  newsDskSport: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots:false,
    responsive: {
      0: {
       items: 2
     },
      480: {
       items: 2
     },
      940: {
       items: 2
     }
    },
   nav: false
  };

  list: string[] = [];
  businessData:any = [];


  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.businessNews();
  }

  businessNews(){   
    this.dataService.businessList().subscribe((result) => {
      console.log(result.articles)
      this.businessData = result.articles
    });
    
  }

}
