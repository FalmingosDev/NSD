import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-neworatinglist',
  templateUrl: './neworatinglist.component.html',
  styleUrls: ['./neworatinglist.component.css']
})
export class NeworatinglistComponent implements OnInit {
  creatots_details:any;

  constructor(private dataService:ApiService) { }

  ngOnInit(): void {
    this.dataService.fetchCreatorsDetails().subscribe((res)=>{
      console.log(res);
      console.log(typeof res);
      this.creatots_details=res;
      console.log(this.creatots_details)
    })
  }

}
