import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

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


  constructor(private api: ApiService) { }
  bannerCollection: any = [];
  recomendedCollection: any = [];
  upcommingCollection: any = [];
  recomendedWishList: any=[];
  recomendedWishListRemove: any=[];
  wishListCollection:any=[];
  ngOnInit(): void {
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

    })
  }
  addWishList(multiplex_id)
  {
    
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



}

// function multiplex_id(multiplex_id: any) {
//   throw new Error('Function not implemented.');
// }
