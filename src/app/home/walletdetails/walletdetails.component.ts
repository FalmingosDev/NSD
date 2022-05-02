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


  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.walletList();
  }

  walletList(){   
    this.dataService.walletList().subscribe((result) => {
      this.walletData = result;
      setTimeout(function() { $('#walletTable').dataTable() }, 1000);
      // console.log(this.walletData);
    });
  }

}
