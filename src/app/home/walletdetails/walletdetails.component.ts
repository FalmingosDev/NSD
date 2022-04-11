import { Component, OnInit } from '@angular/core';
import "datatables.net";
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-walletdetails',
  templateUrl: './walletdetails.component.html',
  styleUrls: ['./walletdetails.component.css']
})
export class WalletdetailsComponent implements OnInit {

  $:any =[];
  walletData:any =[];
  env=environment;


  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.walletList();
  }

  // ngAfterViewInit(): void{
  //   this.inItdataTable();
  // }

  walletList(){   
    this.dataService.walletList().subscribe((result) => {
      this.walletData = result;
      setTimeout(function() { $('#walletTable').dataTable() }, 1000);

      // console.log(this.walletData);
    });
  }

  // inItdataTable(){
  //   $('#example').DataTable();
  // }

}
