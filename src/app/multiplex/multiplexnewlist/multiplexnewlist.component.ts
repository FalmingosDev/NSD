import { Component, OnInit } from '@angular/core';
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
  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.multiplexNewList();
  }


  multiplexNewList()
  {
this.api.multiplexNewList().subscribe((result)=>
{
this.newlist=result.new_multiplex_list;
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
  
}
