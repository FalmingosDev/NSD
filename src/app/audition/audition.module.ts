import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AuditionRoutingModule } from './audition-routing.module';
import { AuditionFormComponent } from './audition-form/audition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutauditionComponent } from './aboutaudition/aboutaudition.component';
import { AuditioncategoriesComponent } from './auditioncategories/auditioncategories.component';
import { AuditionjudgesComponent } from './auditionjudges/auditionjudges.component';
import { UpcomingauditionComponent } from './upcomingaudition/upcomingaudition.component';
import { AuditiontcComponent } from './auditiontc/auditiontc.component';
import { AuditionheaderComponent } from './auditionheader/auditionheader.component';
import { AuditionfooterComponent } from './auditionfooter/auditionfooter.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersubbmissionComponent } from './usersubbmission/usersubbmission.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { UserComponent } from './user/user.component';
import { UserpreviewComponent } from './userpreview/userpreview.component';
 

@NgModule({
  declarations: [
    // FormComponent,
    AuditionFormComponent,
    AboutauditionComponent,
    AuditioncategoriesComponent,
    AuditionjudgesComponent,
    UpcomingauditionComponent,
    AuditiontcComponent,
    AuditionheaderComponent,
    AuditionfooterComponent,
    UserprofileComponent,
    UserhomeComponent,
    UsersubbmissionComponent,
    UserheaderComponent,
    UserfooterComponent,
    UserComponent,
    UserpreviewComponent
  ],
  imports: [
    CommonModule,
    AuditionRoutingModule,
    BrowserAnimationsModule,
    CarouselModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  
  exports:[
  
    AuditionFormComponent
  ]
})
export class AuditionModule { }
