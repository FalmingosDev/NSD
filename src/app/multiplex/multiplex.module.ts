import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplexRoutingModule } from './multiplex-routing.module';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';
import { HomeModule } from '../home/home.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    MultiplexhomeComponent
  ],
  imports: [
    CommonModule,
    MultiplexRoutingModule,
    HomeModule,
    CarouselModule
  ]
})
export class MultiplexModule { }
