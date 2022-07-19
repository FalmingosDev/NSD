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
import { AcceptcampaignbeforeComponent } from './acceptcampaignbefore/acceptcampaignbefore.component';
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [
    HashtaghomeComponent,
    CampaignComponent,
    HashtaguserprofileComponent,
    CategorymasterComponent,
    MyallcampaignComponent,
    MypendingcampaignComponent,
    PendingsocialandaddressaddComponent,
    AcceptcampaignbeforeComponent,
    
  ],
  imports: [
    CommonModule,
    HashtagRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  bootstrap: [HashtaghomeComponent]
})
export class HashtagModule { }


