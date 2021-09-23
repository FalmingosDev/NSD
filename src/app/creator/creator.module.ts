import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorcontentComponent } from './creatorcontent/creatorcontent.component';
import { CreatorcontentdetailsComponent } from './creatorcontentdetails/creatorcontentdetails.component';
import { CreatorcontenteditComponent } from './creatorcontentedit/creatorcontentedit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JoinascreatorComponent } from './joinascreator/joinascreator.component';
//import { NgxSelectMultipleModule } from 'ngx-select-multiple';
import { CreatorcontentaddComponent } from './creatorcontentadd/creatorcontentadd.component';


@NgModule({
  declarations: [
    CreatorcontentComponent,
    CreatorcontentdetailsComponent,
    CreatorcontenteditComponent,
    HeaderComponent,
    FooterComponent,
    JoinascreatorComponent,
    CreatorcontentaddComponent
    
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
    //,NgxSelectMultipleModule
  ]
})
export class CreatorModule { }
