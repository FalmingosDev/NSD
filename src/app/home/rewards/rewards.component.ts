import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    
  }

  activte(id){
    let act=document.getElementById(id).style.display;
    if(act=='block'){
      document.getElementById(id).style.display='none';
    }
    else{
      document.getElementById(id).style.display='block'; 
    } 
  }
}

