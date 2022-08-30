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
  constructor(sanitizer: DomSanitizer,private activatedRoute:ActivatedRoute,private dataService: ApiService,private router:Router) {
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
    console.log(this.game_id);
    console.log(this.score);
    this.dataService.insertgamescore(this.game_id,this.score).subscribe((result) =>{       
        this.router.navigate(['/game']);  
        localStorage.removeItem('score');
        localStorage.removeItem('gameId');      
      });            

    // if(this.game_id == 6){
    //   this.score='100';
    //   console.log(this.score);      
    //   this.game_id = localStorage.getItem('gameId');
    //   this.dataService.insertgamescore(this.game_id,this.score).subscribe((result) =>{
    //   localStorage.removeItem('score');
    //   localStorage.removeItem('gameId');
    //     this.router.navigate(['/game']);        
    //   });            
    // }
    // else{
    //   this.score = localStorage.getItem('score');
    //   this.game_id = localStorage.getItem('gameId');
    //   console.log(this.score);
    //   this.dataService.insertgamescore(this.game_id,this.score).subscribe((result) =>{
    //     localStorage.removeItem('score');
    //     localStorage.removeItem('gameId');
    //     this.router.navigate(['/game']);
    //   });
    // }
    
  }

}
