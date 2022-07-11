import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeModule } from '../home/home.module';
// import { HomeModule } from '../home/home.module'; 
// import { CarouselModule } from 'ngx-owl-carousel-o'; 

import { MultiplexRoutingModule } from './multiplex-routing.module';
import { MultiplexcheckoutComponent } from './multiplexcheckout/multiplexcheckout.component';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';
import { MultiplextendingComponent } from './multiplextending/multiplextending.component';
import { MultiplexwishlistComponent } from './multiplexwishlist/multiplexwishlist.component';
import { HomeModule } from '../home/home.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendedwishlistComponent } from './recommendedviewall/recommendedwishlist.component';
import { UpcomingviewallComponent } from './upcomingviewall/upcomingviewall.component';


@NgModule({
  declarations: [
    MultiplexcheckoutComponent,
    MultiplexhomeComponent,
    MultiplextendingComponent,
    MultiplexwishlistComponent,
    RecommendedwishlistComponent,
    UpcomingviewallComponent
  ],
  imports: [
    CommonModule,
    MultiplexRoutingModule,
    HomeModule,
    CarouselModule,
    BrowserAnimationsModule
    
  ]
})
export class MultiplexModule { }
