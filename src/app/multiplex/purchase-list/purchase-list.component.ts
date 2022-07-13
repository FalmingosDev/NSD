import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  list: any;

  constructor(private api:ApiService) { }
    
  ngOnInit(): void {
this.purchaseList();
  }
  purchaseList()
  {

    alert('hii');
this.api.purchaseList().subscribe((result)=>
{
this.list=result.purchase_list;
console.log("list is:",this.list);
})

  }
 

}
