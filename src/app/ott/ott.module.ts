import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'

import { OttRoutingModule } from './ott-routing.module';
import { OtthomeComponent } from './otthome/otthome.component';
import { OttheaderComponent } from './ottheader/ottheader.component';
import { OttfooterComponent } from './ottfooter/ottfooter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutottComponent } from './aboutott/aboutott.component';
import { OttprivecyComponent } from './ottprivecy/ottprivecy.component';
import { OtttermsComponent } from './ottterms/ottterms.component';
import { OttcontactsComponent } from './ottcontacts/ottcontacts.component';
import { OttmovieComponent } from './ottmovie/ottmovie.component';
import { OttvideodetailComponent } from './ottvideodetail/ottvideodetail.component';
import { OttvideotypeComponent } from './ottvideotype/ottvideotype.component';
import { Ottvideotype1Component } from './ottvideotype1/ottvideotype1.component';
import { Ottvideotype2Component } from './ottvideotype2/ottvideotype2.component';
import { Ottvideotype3Component } from './ottvideotype3/ottvideotype3.component';
import { Ottvideotype4Component } from './ottvideotype4/ottvideotype4.component';
import { Ottvideotype5Component } from './ottvideotype5/ottvideotype5.component';
import { Ottvideotype6Component } from './ottvideotype6/ottvideotype6.component';
import { OttvideowmdComponent } from './ottvideowmd/ottvideowmd.component';
import { OttshortsComponent } from './ottshorts/ottshorts.component';
import { OttcneComponent } from './ottcne/ottcne.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    OtthomeComponent,
    OttheaderComponent,
    OttfooterComponent,
    AboutottComponent,
    OttprivecyComponent,
    OtttermsComponent,
    OttcontactsComponent,
    OttmovieComponent,
    OttvideodetailComponent,
    OttvideotypeComponent,
    Ottvideotype1Component,
    Ottvideotype2Component,
    Ottvideotype3Component,
    Ottvideotype4Component,
    Ottvideotype5Component,
    Ottvideotype6Component,
    OttvideowmdComponent,
    OttshortsComponent,
    OttcneComponent
  ],
  imports: [
    CommonModule,
    OttRoutingModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule
  ]
})
export class OttModule { }
