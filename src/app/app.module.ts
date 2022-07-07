import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { OttModule } from './ott/ott.module'
import { CreatorModule } from './creator/creator.module';
import { HashtagModule } from './hashtag/hashtag.module';


import { HttpClientModule } from '@angular/common/http';
import { MultiplexModule } from './multiplex/multiplex.module';

import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    OttModule,
    CreatorModule,
    HttpClientModule,
    HashtagModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
