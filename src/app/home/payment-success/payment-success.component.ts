import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    console.log("...........")
    this.dataService.paymentResponse().subscribe(data=> {
      console.log(data.encResp)
  });
  }

}
