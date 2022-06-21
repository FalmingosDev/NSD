import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewardlist:any=[];
  rewardData_id:String="";
  rewardData_title:String="";
  rewardData_desc:String="";
  rewardData_val_date:String="";
  rewardData_coin:String="";

  constructor(private service:ApiService,private route:Router) { }
  
  ngOnInit(): void {
    this.getrewardlist();
  }

  getrewardlist(){
    this.service.rewardList().subscribe((result)=>{
      this.rewardlist = result.reward_list;
      //console.log(this.rewardlist);
    })
  }

  
  active_modal(id){
    this.service.getRewardData(id).subscribe((result)=>{
      this.rewardData_id = result.reward_data[0].id;
      this.rewardData_title = result.reward_data[0].rewards_title;
      this.rewardData_desc = result.reward_data[0].rewards_desc;
      this.rewardData_coin = result.reward_data[0].reward_coin;
      //this.rewardData_val_date = result.reward_data[0].validity_date;
    })
    $('#rewardDiv'+id).attr('data-target','#active_spark1');
  }


  activte(id,rewardId){
    let act=document.getElementById(id).style.display;
    this.service.activateReward(rewardId).subscribe((result)=>{
      if(result.status){
        document.getElementById(id).style.display='block'; 
      }
      else{
        document.getElementById(id).style.display='none';
      }
      setTimeout(function(){$("#welbonus .close").click()},2000);
      this.getrewardlist();
    })
  }


}


