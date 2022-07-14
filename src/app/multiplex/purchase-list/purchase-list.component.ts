import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  purchaselist: any;
  env=environment;
  recomendedWishListRemove: any;
  recomendedWishList: any;
  constructor(private api:ApiService) { }
    
  ngOnInit(): void {
this.purchaseList();
  }
  purchaseList()
  {
this.api.multiplexPurchaseList().subscribe((result)=>
{
this.purchaselist=result.purchase_list;
console.log("list is:",this.purchaselist);
})

  }
  removeWishList(multiplex_id)
{
this.api.removeMultiplexWishlist(multiplex_id).subscribe((result)=>
{
  this.recomendedWishListRemove=result;
  this.purchaseList();
})
}

addWishList(multiplex_id)
  {
    
    this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
    this.recomendedWishList=result;
    this.purchaseList();
     })

}

}
