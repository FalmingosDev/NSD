import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hashtaguserprofile',
  templateUrl: './hashtaguserprofile.component.html',
  styleUrls: ['./hashtaguserprofile.component.css']
})
export class HashtaguserprofileComponent implements OnInit {

  constructor() { 
    $(document).ready(function(){
      $("#stepfunone").click(function(){
        $("#editwo").show();
        $("#editone").hide();
      });
      $("#stepfuntwo").click(function(){
        $("#editone").show();
        $("#editwo").hide();
      });
    });
  }

  ngOnInit(): void {
  }

  

}
