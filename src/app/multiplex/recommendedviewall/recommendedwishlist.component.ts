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
// removeWishList(multiplex_id)
// {
// this.api.removeWishList().subscribe((result)=>
// {
//   this.
// })
// }

}
