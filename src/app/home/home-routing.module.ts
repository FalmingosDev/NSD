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
import { AboutReferralComponent } from './about-referral/about-referral.component';
import { ReferralDetailComponent } from './referral-detail/referral-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { HastagComponent } from './hastag/hastag.component';
import { StarsComponent } from './stars/stars.component';
import {NewsdetailComponent} from './newsdetail/newsdetail.component';
import {BlogdetailsComponent} from './blogdetails/blogdetails.component';
import { WalletdetailsComponent } from './walletdetails/walletdetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { EditphoneComponent } from './editphone/editphone.component';
import { HashtaghomeComponent } from '../hashtag/hashtaghome/hashtaghome.component';
import { ReferralinviteComponent } from './referralinvite/referralinvite.component'
import { RedeemComponent } from './redeem/redeem.component';
import { PaypalpaymentComponent } from './paypalpayment/paypalpayment.component';
import { RechargewalletComponent } from './rechargewallet/rechargewallet.component';
import { RechargepaymentComponent } from './rechargepayment/rechargepayment.component';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';
import { RechargePaymentSuccessComponent } from './recharge-payment-success/recharge-payment-success.component';
import { RechargePaymentCancelComponent } from './recharge-payment-cancel/recharge-payment-cancel.component';
import { NotificationComponent } from './notification/notification.component';





const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'newoclan', component:HomepageComponent},
  {path:'ratinglist', component:NeworatinglistComponent},
  {path:'ratingdetail/:code',component:NeworatingdetailComponent},
  {path:'influencersignup',component:InfluencerSignupComponent, canActivate: [AuthguardGuard]},
  {path:'pricing', component:PriceComponent, canActivate: [AuthguardGuard]},
  {path:'subcription/:username', component:SubcriptionComponent, canActivate: [AuthguardGuard]},
  {path:'game', component:GameComponent, canActivate: [AuthguardGuard]},
  {path:'play/:id', component:PlaygameComponent, canActivate: [AuthguardGuard]},
  // {path:'play', component:PlaygameComponent, canActivate: [AuthguardGuard]},
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
  {path: 'about_referral', component:AboutReferralComponent},
  {path: 'referral_details', component:ReferralDetailComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'privacy', component:PrivacyComponent},
  {path: 'terms', component:TermsComponent},
  {path: 'hashtag', component:HashtaghomeComponent},
  {path: 'stars', component:StarsComponent},
  {path: 'newsdetail', component:NewsdetailComponent},
  {path: 'blogdetails/:blog_id', component:BlogdetailsComponent},
  {path: 'walletdetails', component:WalletdetailsComponent},
  {path: 'change_password', component:ChangepasswordComponent},
  {path: 'profile_detail', component:ProfileDetailComponent},
  {path: 'edit_phone/:phone', component:EditphoneComponent},
  {path: 'referralinvite', component:ReferralinviteComponent},
  {path: 'redeem', component: RedeemComponent},
  {path: 'paypalpayment', component: PaypalpaymentComponent},
  {path: 'rechargewallet',component:RechargewalletComponent},
  {path: 'rechargepayment/:recharge_id/:recharge_price/:curr/:recharge_coins', component: RechargepaymentComponent},
  // {path: 'spin_wheel',component:SpinWheelComponent}play/:id
  {path: 'spin_wheel/:prize/:transaction_id',component:SpinWheelComponent},
  {path: 'recharge_success', component:RechargePaymentSuccessComponent},
  {path: 'recharge_cancel', component:RechargePaymentCancelComponent},
  {path: 'notification', component:NotificationComponent}


];

@NgModule({
  // imports: [RouterModule.forChild(routes, {scrollPositionRestoration: 'enabled'})],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
