import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplexwishlist',
  templateUrl: './multiplexwishlist.component.html',
  styleUrls: ['./multiplexwishlist.component.css']
})
export class MultiplexwishlistComponent implements OnInit {
   env=environment;
  yesterday: any;
  constructor(private api:ApiService,private router:Router) { }
   wishListShow:any=[];
   recomendedWishListRemove :any=[];
   findWishListId:any=[];
  ngOnInit(): void {
   this.wishList();
  }
  wishList()
  {
    this.api.wishList().subscribe((result)=>
    {
      this.wishListShow=result.multiplex_wishlist;
      this.yesterday=result.yesterday;
      //console.log(this.yesterday)


    })
  }



  removeWishList(multiplex_id)
  {
    
    this.api.removeMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishListRemove=result;
    this.wishList();
     })
     
}

checkSubscribe(multiplex_id,purchase_time,yesterday)
{
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

