import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutauditionComponent } from './aboutaudition/aboutaudition.component';

import { AuditionFormComponent } from "./audition-form/audition-form.component";
import { AuditioncategoriesComponent } from './auditioncategories/auditioncategories.component';
import { AuditionjudgesComponent } from './auditionjudges/auditionjudges.component';
import { AuditiontcComponent } from './auditiontc/auditiontc.component';
import { UpcomingauditionComponent } from './upcomingaudition/upcomingaudition.component';

import { UserhomeComponent } from './userhome/userhome.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersubbmissionComponent } from './usersubbmission/usersubbmission.component';

// import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {path:'auditionform', component:AuditionFormComponent},
  {path:'aboutaudition', component:AboutauditionComponent},
  {path:'auditioncategories', component:AuditioncategoriesComponent},
  {path:'auditionjudges', component:AuditionjudgesComponent},
  {path:'upcomingaudition', component:UpcomingauditionComponent},
  {path:'auditiontermsandconditions', component:AuditiontcComponent},
  {path:'userhome', component:UserhomeComponent},
  {path:'userprofile', component:UserprofileComponent},
  {path:'usersubbmission', component:UsersubbmissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditionRoutingModule { }
