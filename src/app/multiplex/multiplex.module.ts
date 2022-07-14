import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplexRoutingModule } from './multiplex-routing.module';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';
import { HomeModule } from '../home/home.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MultiplextendingComponent } from './multiplextending/multiplextending.component';
import { MultiplexwishlistComponent } from './multiplexwishlist/multiplexwishlist.component';
import { MultiplexcheckoutComponent } from './multiplexcheckout/multiplexcheckout.component';



@NgModule({
  declarations: [
    MultiplexhomeComponent,
    MultiplextendingComponent,
    MultiplexwishlistComponent,
    MultiplexcheckoutComponent
  ],
  imports: [
    CommonModule,
    MultiplexRoutingModule,
    HomeModule,
    CarouselModule
  ]
})
export class MultiplexModule { }
