import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';

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
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentCancelComponent } from './payment-cancel/payment-cancel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { NewsdeskComponent } from './newsdesk/newsdesk.component';
import { NewostreetComponent } from './newostreet/newostreet.component';
import { NftartComponent } from './nftart/nftart.component';
import { AboutNewoclanComponent } from './about-newoclan/about-newoclan.component';
import { AboutMultiplexComponent } from './about-multiplex/about-multiplex.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ReferralComponent } from './referral/referral.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { HastagComponent } from './hastag/hastag.component';
import { StarsComponent } from './stars/stars.component';
import {NewsdetailComponent} from './newsdetail/newsdetail.component';
import {BlogdetailsComponent} from './blogdetails/blogdetails.component';
import { WalletdetailsComponent } from './walletdetails/walletdetails.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'newoclan', component:HomepageComponent},
  {path:'ratinglist', component:NeworatinglistComponent},
  {path:'ratingdetail/:code',component:NeworatingdetailComponent},
  {path:'influencersignup',component:InfluencerSignupComponent, canActivate: [AuthguardGuard]},
  {path:'pricing', component:PriceComponent, canActivate: [AuthguardGuard]},
  {path:'subcription/:username', component:SubcriptionComponent, canActivate: [AuthguardGuard]},
  {path:'game', component:GameComponent, canActivate: [AuthguardGuard]},
  // {path:'play/:data', component:PlaygameComponent, canActivate: [AuthguardGuard]},
  {path:'play', component:PlaygameComponent, canActivate: [AuthguardGuard]},
  {path:'payment/:sec/:amt/:curr/:referrer', component:PaymentComponent, canActivate: [AuthguardGuard]},
  {path:'payment_success', component:PaymentSuccessComponent},
  {path:'payment_cancel', component:PaymentCancelComponent},
  {path:'comingsoon', component:ComingsoonComponent}, 
  {path:'about', component:AboutComponent}, 
  {path:'contact', component:ContactComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'exchange', component:ExchangeComponent},
  {path: 'about_newoclan', component:AboutNewoclanComponent},
  {path: 'newsdesk', component:NewsdeskComponent},
  {path: 'newostreet', component:NewostreetComponent},
  {path: 'nft', component:NftartComponent},
  {path: 'about_multiplex', component:AboutMultiplexComponent}, 
  {path: 'rewards', component:RewardsComponent},
  {path: 'referral', component:ReferralComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'hashtag', component:HastagComponent},
  {path: 'stars', component:StarsComponent},
  {path: 'newsdetail', component:NewsdetailComponent},
  {path: 'blogdetails/:blog_id', component:BlogdetailsComponent},
  {path: 'walletdetails', component:WalletdetailsComponent}
];

@NgModule({
  // imports: [RouterModule.forChild(routes, {scrollPositionRestoration: 'enabled'})],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
