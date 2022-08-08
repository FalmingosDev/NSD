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
import { Ottvideotype1Component } from './ottvideotype1/ottvideotype1.component';
import { Ottvideotype2Component } from './ottvideotype2/ottvideotype2.component';
import { Ottvideotype3Component } from './ottvideotype3/ottvideotype3.component';
import { Ottvideotype4Component } from './ottvideotype4/ottvideotype4.component';
import { Ottvideotype5Component } from './ottvideotype5/ottvideotype5.component';
import { Ottvideotype6Component } from './ottvideotype6/ottvideotype6.component';
import { OttvideowmdComponent } from './ottvideowmd/ottvideowmd.component';
import { OttshortsComponent } from './ottshorts/ottshorts.component';
import { OttcneComponent } from './ottcne/ottcne.component';





const routes: Routes = [
  
  {path:'otthome', component:OtthomeComponent },
  {path:'aboutott', component:AboutottComponent },
  {path:'ottprivecy', component:OttprivecyComponent},
  {path:'ottterms', component:OtttermsComponent},
  {path:'ottcontact', component:OttcontactsComponent},
  {path:'ottmovie', component:OttmovieComponent},
  {path:'ottvideodetail/:id',component:OttvideodetailComponent},
  {path:'ottvideotype/:type/:episode/:season',component:OttvideotypeComponent},
  {path:'ottvideotype1',component:Ottvideotype1Component},
  {path:'ottvideotype2',component:Ottvideotype2Component},
  {path:'ottvideotype3',component:Ottvideotype3Component},
  {path:'ottvideotype4',component:Ottvideotype4Component},
  {path:'ottvideotype5',component:Ottvideotype5Component},
  {path:'ottvideotype6',component:Ottvideotype6Component},
  {path:'ottvideowmd',component:OttvideowmdComponent},
  {path:'ottshorts',component:OttshortsComponent},
  {path:'ottcne',component:OttcneComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OttRoutingModule { }
