import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeratingComponent } from './homerating/homerating.component';
import { HomenewsComponent } from './homenews/homenews.component';
import { HomeshowsComponent } from './homeshows/homeshows.component';
import { NeworatinglistComponent } from './neworatinglist/neworatinglist.component';
import { HomelatestComponent } from './homelatest/homelatest.component';
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
import { WelcomeheaderComponent } from './welcomeheader/welcomeheader.component';
import { WelcomefooterComponent } from './welcomefooter/welcomefooter.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PlyrModule } from 'ngx-plyr';
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
import { AlertModule } from 'ngx-alerts';
import { HastagComponent } from './hastag/hastag.component';
import { StarsComponent } from './stars/stars.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { WalletdetailsComponent } from './walletdetails/walletdetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AboutReferralComponent } from './about-referral/about-referral.component';
import { ReferralDetailComponent } from './referral-detail/referral-detail.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { EditphoneComponent } from './editphone/editphone.component';
import { ReferralinviteComponent } from './referralinvite/referralinvite.component'
import { RedeemComponent } from './redeem/redeem.component';
import { RechargewalletComponent } from './rechargewallet/rechargewallet.component';
import { RechargepaymentComponent } from './rechargepayment/rechargepayment.component';

import { RechargePaymentSuccessComponent } from './recharge-payment-success/recharge-payment-success.component';
import { RechargePaymentCancelComponent } from './recharge-payment-cancel/recharge-payment-cancel.component';
import { NotificationComponent } from './notification/notification.component';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';

import { JwPaginationModule } from 'jw-angular-pagination';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HomeratingComponent,
    HomenewsComponent,
    HomeshowsComponent,
    NeworatinglistComponent,
    HomelatestComponent,
    NeworatingdetailComponent,
    InfluencerSignupComponent,
    PriceComponent,
    SubcriptionComponent,
    GameComponent,
    PlaygameComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    PaymentCancelComponent,
    WelcomeComponent,
    WelcomeheaderComponent,
    WelcomefooterComponent,
    ComingsoonComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    ExchangeComponent,
    NewsdeskComponent,
    NewostreetComponent,
    NftartComponent,
    AboutNewoclanComponent,
    AboutMultiplexComponent,
    RewardsComponent,
    ReferralComponent,
    BlogsComponent,
    GalleryComponent,
    PrivacyComponent,
    TermsComponent,
    HastagComponent,
    StarsComponent,
    NewsdetailComponent,
    BlogdetailsComponent,
    WalletdetailsComponent,
    ChangepasswordComponent,
    AboutReferralComponent,
    ReferralDetailComponent,
    ProfileDetailComponent,
    EditphoneComponent,
    ReferralinviteComponent,
    RedeemComponent,
    RechargewalletComponent,
    RechargepaymentComponent,
    SpinWheelComponent,
    RechargePaymentSuccessComponent,
    RechargePaymentCancelComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule, 
    ReactiveFormsModule,
    PlyrModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right', positionY:'top'}),
    NgImageFullscreenViewModule,
    JwPaginationModule
  ],
  exports:[
    WelcomefooterComponent
  ]
})
export class HomeModule { }
