import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashtagRoutingModule } from './hashtag-routing.module';
import { HashtaghomeComponent } from './hashtaghome/hashtaghome.component';
import { HomeModule } from '../home/home.module';
import { CampaignComponent } from './campaign/campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HashtaghomeComponent,
    CampaignComponent
  ],
  imports: [
    CommonModule,
    HashtagRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  bootstrap: [HashtaghomeComponent]
})
export class HashtagModule { }

