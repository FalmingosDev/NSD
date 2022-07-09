import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplexwishlist',
  templateUrl: './multiplexwishlist.component.html',
  styleUrls: ['./multiplexwishlist.component.css']
})
export class MultiplexwishlistComponent implements OnInit {
   env=environment;
  constructor(private api:ApiService) { }
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

}

