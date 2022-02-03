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
import { ProfileComponent } from './profile/profile.component';


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
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    BrowserAnimationsModule,
    CarouselModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class HomeModule { }
