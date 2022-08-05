import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';
import { AlertService } from 'ngx-alerts';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationData: any;
  constructor(private activatedRoute:ActivatedRoute,private dataService: ApiService,private router:Router,private alertService: AlertService) { }

  ngOnInit(): void {
   this.notificationList(); 
  }

  notificationList(){   
    this.dataService.notificationList().subscribe((result) => {
      this.notificationData = result;
      // console.log(this.notificationData); 
    });
  }
}
