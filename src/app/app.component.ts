import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NS';
  // public lat;
  // public lng;
  

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
    // this.getCurrentLocation();
    
  }

  // getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //     console.log(position.coords.latitude + ' ' + position.coords.longitude)
  //     this.lat = position.coords.latitude;
  //     this.lng = position.coords.longitude;
  //     console.log(this.lat);
  //     console.log(this.lat);});
  //   }
  //   else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  
}
