import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardGuard } from '../authguard.guard';

import { HomepageComponent } from './homepage/homepage.component';
import { NeworatinglistComponent } from './neworatinglist/neworatinglist.component';
import { NeworatingdetailComponent } from './neworatingdetail/neworatingdetail.component';
import { InfluencerSignupComponent } from './influencer-signup/influencer-signup.component';
import { PriceComponent } from './price/price.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { GameComponent } from './game/game.component';
import { PlaygameComponent } from './playgame/playgame.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'ratinglist', component:NeworatinglistComponent},
  {path:'ratingdetail/:code',component:NeworatingdetailComponent},
  {path:'influencersignup',component:InfluencerSignupComponent, canActivate: [AuthguardGuard]},
  {path:'pricing', component:PriceComponent, canActivate: [AuthguardGuard]},
  {path:'subcription/:username', component:SubcriptionComponent, canActivate: [AuthguardGuard]},
  {path:'game', component:GameComponent, canActivate: [AuthguardGuard]},
  {path:'play/:data', component:PlaygameComponent, canActivate: [AuthguardGuard]},
  {path:'payment/:sec/:amt/:curr', component:PaymentComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
