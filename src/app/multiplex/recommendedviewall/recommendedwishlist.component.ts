import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recommendedwishlist',
  templateUrl: './recommendedwishlist.component.html',
  styleUrls: ['./recommendedwishlist.component.css']
})
export class RecommendedwishlistComponent implements OnInit {
  env=environment;
  recomendedWishList: any;
  constructor(private api:ApiService) { }
   wishListShow:any=[];
   recomendedWishListRemove :any=[];
   findWishListId:any=[];
   
  ngOnInit(): void {
   this.viewAllRecommendedList();
  }

  viewAllRecommendedList()
  {
    this.api.viewAllWishList().subscribe((result)=>
    {
      this.wishListShow=result.recommended_multiplex_list;
    })
}
removeWishList(multiplex_id)
{
this.api.removeMultiplexWishlist(multiplex_id).subscribe((result)=>
{
  this.recomendedWishListRemove=result;
  this.viewAllRecommendedList();
})
}

addWishList(multiplex_id)
  {
    
    this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishList=result;
    this.viewAllRecommendedList();
     })

}

}
