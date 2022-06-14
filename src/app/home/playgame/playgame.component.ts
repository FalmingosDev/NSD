import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-playgame',
  templateUrl: './playgame.component.html', 
  styleUrls: ['./playgame.component.css']
})




export class PlaygameComponent implements OnInit {
  env=environment;
  // primaryUrl:string="https://newoapp.app/Whack_a_mole/game/index.html";
  // primaryUrl:string="https://newoapp.app/WheelGame/game/index.html";
  // primaryUrl:string="https://www.gamezop.com/g/";
  // primaryUrl:string="https://www.gamezop.com/g/SyXuN7W1F?id=cfuucl7YgA&lang=en";
  // primaryUrl:string="https://newoapp.app/";

  primaryUrl:string=this.env.appUrl;
  baseGameUrl:string;
  gameUrl:string;
  gameId:string;
  final_url:string;
  sanitizer:any;
  email:any;
  score:any;
  game_id: any;

  // validIframe:boolean=false;
  constructor(sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute,private dataService: ApiService,private route:Router) {
    this.sanitizer=sanitizer;
   }

  ngOnInit(): void {
    this.game();
    this.email = localStorage.getItem('token'); 
    this.score = localStorage.getItem('score');        
  }
  //sanitize url--------
  /*getSafeUrl(url) {
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }*/

  game(){
    this.gameId=this.activatedRoute.snapshot.params['id'];
    this.game_id = localStorage.setItem('gameId', this.gameId);
    this.dataService.getGameUrl(this.gameId).subscribe((result) =>{
      this.gameUrl=this.primaryUrl+result.game_url;
      // this.final_url=this.getSafeUrl(this.gameUrl);
      this.final_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.gameUrl);
    });
  }

  gamescore(){
    this.score = localStorage.getItem('score');
    this.game_id = localStorage.getItem('gameId');
    indexedDB.open('highscore');
    //console.log(this.score);
    this.dataService.insertgamescore(this.game_id,this.score).subscribe((result) =>{
      localStorage.removeItem('score');
      localStorage.removeItem('gameId');
    });
   
  }

}
