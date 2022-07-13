import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashtagRoutingModule } from './hashtag-routing.module';
import { HashtaghomeComponent } from './hashtaghome/hashtaghome.component';
import { HomeModule } from '../home/home.module';
import { CampaignComponent } from './campaign/campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashtaguserprofileComponent } from './hashtaguserprofile/hashtaguserprofile.component';
import { CategorymasterComponent } from './categorymaster/categorymaster.component';
import { MyallcampaignComponent } from './myallcampaign/myallcampaign.component';
import { MypendingcampaignComponent } from './mypendingcampaign/mypendingcampaign.component';
import { PendingsocialandaddressaddComponent } from './pendingsocialandaddressadd/pendingsocialandaddressadd.component';


@NgModule({
  declarations: [
    HashtaghomeComponent,
    CampaignComponent,
    HashtaguserprofileComponent,
    CategorymasterComponent,
    MyallcampaignComponent,
    MypendingcampaignComponent,
    PendingsocialandaddressaddComponent,
    
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


