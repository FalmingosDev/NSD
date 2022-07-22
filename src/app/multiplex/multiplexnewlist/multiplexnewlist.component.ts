import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-multiplexnewlist',
  templateUrl: './multiplexnewlist.component.html',
  styleUrls: ['./multiplexnewlist.component.css']
})
export class MultiplexnewlistComponent implements OnInit {
  newlist: any;
env=environment;
  recomendedWishListRemove: any;
  recomendedWishList: any;
  yesterday: any;
  constructor(private route:ActivatedRoute,private api: ApiService,private router:Router,) { }

  ngOnInit(): void {
    this.multiplexNewList();
  }


  multiplexNewList()
  {
this.api.multiplexNewList().subscribe((result)=>
{
this.newlist=result.new_multiplex_list;
this.yesterday=result.yesterday;
console.log(this.newlist);

})
  }


  removeWishList(multiplex_id)
  {
  this.api.removeMultiplexWishlist(multiplex_id).subscribe((result)=>
  {
    this.recomendedWishListRemove=result;
    this.multiplexNewList();
  })
  }
  
  addWishList(multiplex_id)
    {
      
      this.api.addMultiplexWishlist(multiplex_id).subscribe((result) => {
      this.recomendedWishList=result;
      this.multiplexNewList();
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
  

