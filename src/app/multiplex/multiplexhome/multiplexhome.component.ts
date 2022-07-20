import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-multiplexhome',
  templateUrl: './multiplexhome.component.html',
  styleUrls: ['./multiplexhome.component.css']
})
export class MultiplexhomeComponent implements OnInit {
  env = environment;

  customOptionsforshortflim: OwlOptions = {
    autoplay: false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    stagePadding: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  };
  customOptionsforshowflim: OwlOptions = {
    // autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  };
  customOptionsforupcoming: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  };
  list: any;
  myDate: string;
  yesterday: any;


  constructor( private route:ActivatedRoute,private api: ApiService,private router:Router,private datePipe: DatePipe) { }
  bannerCollection: any = [];
  recomendedCollection: any = [];
  upcommingCollection: any = [];
  recomendedWishList: any=[];
  recomendedWishListRemove: any=[];
  wishListCollection:any=[];
  ngOnInit(): void {
    const userEmail = localStorage.getItem('token');
  
    this.multiplexList();
    // this.addWishList(multiplex_id);  
    // this.removeWishList(multiplex_id);  
  }
  multiplexList(){
    this.api.multiplexList().subscribe((result) => {

      console.warn(result)
      this.bannerCollection = result.banner_multiplex_list;
      this.recomendedCollection = result.recommended_multiplex_list;
     
      this.upcommingCollection = result.upcoming_multiplex_list;
      this.wishListCollection=result.multiplex_wishlist;
      this.yesterday=result.yesterday;
     
    })
  }
  addWishList(multiplex_id)

  {
    // alert(multiplex_id)
    
    this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishList=result;
    this.multiplexList();
     })

}
removeWishList(multiplex_id)
  {
    
    this.api.removeMultiplexWishlist(multiplex_id).subscribe((result) => {
      this.recomendedWishListRemove=result;
      this.multiplexList();
    })

}

checkSubscribe(multiplex_id,purchase_time,yesterday)
{
// alert(purchase_time)
//  var purchase_times = formatDate(purchase_time, 'yyyy-MM-dd hh:mm:ss');
//  purchase_time.getDdate();
 
//  alert(purchase_time);
// alert(yesterday)
// var currentDate = new Date(); // Mon Nov 08 2020 09:38:46 GMT+0700 (Indochina Time)
//  var currentDate="Tue Jul 19 2022 11:49:12 GMT+0530 (India Standard Time)";
//currentDate.setDate(currentDate.getDate() - 1);

//alert(currentDate); // return -> Mon Nov 09 2020 09:38:46 GMT+0700 (Indochina Time) 


//   var dateClicked = purchase_time;
// var nextDay = new Date(dateClicked);
// nextDay.setDate(nextDay.getDate() + 1);
// console.log(nextDay.toLocaleDateString());
// alert()
  if(purchase_time>yesterday)
  {
    this.router.navigate(['/multiplexvideoview/'+multiplex_id]);
  }
  else
  {
    this.router.navigate(['/multiplexcheckout/'+multiplex_id]);
  }
}

 
}

// function multiplex_id(multiplex_id: any) {
//   throw new Error('Function not implemented.');
// }
