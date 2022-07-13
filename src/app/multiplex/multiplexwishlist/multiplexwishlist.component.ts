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
    })
  }



  removeWishList(multiplex_id)
  {
    
    this.api.removeMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishListRemove=result;
    this.wishList();
     })
     
}

checkSubscribe(multiplex_id,is_subscribe)
{
  if(is_subscribe=='Y')
  {
    this.router.navigate(['/multiplexvideoview/'+multiplex_id]);
  }
  else
  {
    this.router.navigate(['/multiplexcheckout/'+multiplex_id]);
  }
}


}

