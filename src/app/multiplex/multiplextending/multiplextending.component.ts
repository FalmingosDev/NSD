import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  yesterday: any;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
this.trendingList();
  }

  trendingList()
  {
    this.api.multiplexTrendingList().subscribe((result)=>{
      this.trendinglist=result.tending_multiplex_list;
      // console.log(this.trendinglist);
      this.yesterday=result.yesterday;
    
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
