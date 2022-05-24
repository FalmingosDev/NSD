import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  env=environment;
  gameData: any;
  constructor(private dataService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.gameList();
  };


  gameList(){   
    this.dataService.gameList().subscribe((result) => {
      this.gameData = result;
      // console.log(this.gameData);
    });
  }

}
