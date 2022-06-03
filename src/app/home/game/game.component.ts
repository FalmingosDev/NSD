import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';
import { AlertService } from 'ngx-alerts';
import * as $ from 'jquery';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  env=environment;
  gameData: any;
  price:any;
  id:any;
  name:any;

  constructor(private dataService: ApiService,private route:Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.gameList();
  };


  gameList(){   
    this.dataService.gameList().subscribe((result) => {
      this.gameData = result;
      // console.log(this.gameData);
 
    });
  }

  active_modal(game_id,game_price,game_name){
    $("#insuff_balance").hide();
    this.price=game_price; 
    this.id=game_id;
    this.name=game_name;
    // console.log(this.price);

  }

  payForGame(id){ 
    this.dataService.gamePayment(id).subscribe((result)=>{ 
      if(result.success==true){     
        $("#close_modal").click();
        this.route.navigate(['/play/'+id+'']);
      }
      else if(result.success==false){  
        $("#insuff_balance").show();   
        $("#balance").hide();
        $("#pay").hide();
      }
    })
  }

}
