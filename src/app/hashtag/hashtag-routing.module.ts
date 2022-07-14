import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtaghomeComponent } from './hashtaghome/hashtaghome.component';
import { CampaignComponent } from './campaign/campaign.component';
import { HashtaguserprofileComponent } from './hashtaguserprofile/hashtaguserprofile.component';
import { CategorymasterComponent } from './categorymaster/categorymaster.component';
import { MyallcampaignComponent } from './myallcampaign/myallcampaign.component';
import { MypendingcampaignComponent } from './mypendingcampaign/mypendingcampaign.component';
import { PendingsocialandaddressaddComponent } from './pendingsocialandaddressadd/pendingsocialandaddressadd.component';
import { AcceptcampaignbeforeComponent } from './acceptcampaignbefore/acceptcampaignbefore.component';


const routes: Routes = [
  {path:'hashtaghome', component:HashtaghomeComponent},
  {path:'campaign/:id',component:CampaignComponent},
  {path:'acceptcampaign/:id',component:CampaignComponent},
  {path:'userprofile',component:HashtaguserprofileComponent},
  {path:'categorymaster',component:CategorymasterComponent},
  {path:'myallcampaign',component:MyallcampaignComponent},
  {path:'mypendingcampaign',component:MypendingcampaignComponent},
  {path:'hashtagsocialandaddressadd/:id',component:PendingsocialandaddressaddComponent},
  {path:'acceptcampaignbefore/:id',component:AcceptcampaignbeforeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashtagRoutingModule { }
