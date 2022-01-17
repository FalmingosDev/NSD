import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService: ApiService,) { }
 
  ngOnInit(): void {
    this.createEncryption();
  }
   createEncryption(){
    const section=this.route.snapshot.params['sec'];
    const amount=this.route.snapshot.params['amt'];
    const currency=this.route.snapshot.params['curr'];
    const email=localStorage.getItem("token");
  
    
    const objUserData = {section,amount,currency,email}
    //id,name,email,mobile
    this.dataService.handelCreateEncryption(objUserData).subscribe((res)=>{

    })
  }

}
