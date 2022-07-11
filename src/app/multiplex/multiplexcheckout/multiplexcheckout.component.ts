import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplexcheckout',
  templateUrl: './multiplexcheckout.component.html',
  styleUrls: ['./multiplexcheckout.component.css']
})
export class MultiplexcheckoutComponent implements OnInit {
env=environment;

  constructor( private router:ActivatedRoute  ,private api:ApiService) { }
  collection:any=[];
   coin: any;
  ngOnInit(): void {
   var d= this.router.snapshot.params['multiplex_id']
    this.api.multiplexCheckout(d).subscribe((result)=>
    {
      this.collection=result.multiplex_details;
      // console.log(result);
      this.coin=result.users_walet_coin
      console.log("coin is ",this.coin)
    })

  }


  

}






