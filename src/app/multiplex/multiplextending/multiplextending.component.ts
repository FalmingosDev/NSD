import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplextending',
  templateUrl: './multiplextending.component.html',
  styleUrls: ['./multiplextending.component.css']
})
export class MultiplextendingComponent implements OnInit {
  trendinglist: any;
  env=environment;
  recomendedWishListRemove :any;
  recomendedWishList:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
this.trendingList();
  }

  trendingList()
  {
    this.api.multiplexTrendingList().subscribe((result)=>{
      this.trendinglist=result.tending_multiplex_list;
      console.log(this.trendinglist);
    
     })
    
  }

  removeWishList(multiplex_id)
{
this.api.removeMultiplexWishlist(multiplex_id).subscribe((result)=>
{
  this.recomendedWishListRemove=result;
  this.trendingList();
})
}

addWishList(multiplex_id)
  {
    
    this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishList=result;
    this.trendingList();
     })

}

}
