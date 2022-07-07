import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtaghomeComponent } from './hashtaghome/hashtaghome.component';
import { CampaignComponent } from './campaign/campaign.component';
import { HashtaguserprofileComponent } from './hashtaguserprofile/hashtaguserprofile.component';

const routes: Routes = [
  {path:'hashtaghome', component:HashtaghomeComponent},
  {path:'campaign',component:CampaignComponent},
  {path:'hashtaguserprofile',component:HashtaguserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashtagRoutingModule { }
