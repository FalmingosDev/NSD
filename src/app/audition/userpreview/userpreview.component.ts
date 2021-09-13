import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userpreview',
  templateUrl: './userpreview.component.html',
  styleUrls: ['./userpreview.component.css']
})
export class UserpreviewComponent implements OnInit {
  id:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    
  }

}
