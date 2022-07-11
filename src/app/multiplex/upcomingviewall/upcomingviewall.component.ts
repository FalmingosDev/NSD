import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-upcomingviewall',
  templateUrl: './upcomingviewall.component.html',
  styleUrls: ['./upcomingviewall.component.css']
})
export class UpcomingviewallComponent implements OnInit {

  constructor( private api:ApiService) { }
  upcommingCollection: any = [];
  ngOnInit(): void {
   this.upcomingViewAllList();
  }
  upcomingViewAllList(){
      this.api.upcomingViewAllList().subscribe((result) => {
  
        console.warn(result)
        
        this.upcommingCollection = result.upcoming_multiplex_list;
  
      })
    }


  }


