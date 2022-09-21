import { Component, OnInit } from '@angular/core';
import "datatables.net";
import * as $ from 'jquery';
import 'popper.js';
//import 'jquery';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-walletdetails',
  templateUrl: './walletdetails.component.html',
  styleUrls: ['./walletdetails.component.css']
})
export class WalletdetailsComponent implements OnInit {

  //$:any =[];
  walletData:any =[];
  env=environment;
  pageOfItems: Array<any>;
  pages = [];

  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    
    this.walletList();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
    console.log(this.pageOfItems);
  }

  walletList(){  
    this.dataService.walletList().subscribe((result) => {
      this.walletData = result;
      this.pages = Array(result.length)
      .fill(0)
      .map((x, i) => ({ id: i + 1, name: this.walletData[i] }));
    });
  }
  

}
