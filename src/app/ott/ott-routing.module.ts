import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtthomeComponent } from './otthome/otthome.component';
import { AboutottComponent } from './aboutott/aboutott.component';
import { OttprivecyComponent } from './ottprivecy/ottprivecy.component';
import { OtttermsComponent } from './ottterms/ottterms.component'
import { OttcontactsComponent } from './ottcontacts/ottcontacts.component';
import { OttmovieComponent } from './ottmovie/ottmovie.component';
import { OttvideodetailComponent } from './ottvideodetail/ottvideodetail.component';
import { OttvideotypeComponent } from './ottvideotype/ottvideotype.component';

const routes: Routes = [
  {path:'otthome', component:OtthomeComponent },
  {path:'aboutott', component:AboutottComponent },
  {path:'ottprivecy', component:OttprivecyComponent},
  {path:'ottterms', component:OtttermsComponent},
  {path:'ottcontact', component:OttcontactsComponent},
  {path:'ottmovie', component:OttmovieComponent},
  {path:'ottvideodetail/:slug',component:OttvideodetailComponent},
  {path:'ottvideotype',component:OttvideotypeComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OttRoutingModule { }
