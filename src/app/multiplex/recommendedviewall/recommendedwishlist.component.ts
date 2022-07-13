import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private api:ApiService,private router:Router) { }
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
