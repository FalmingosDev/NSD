import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';

const routes: Routes = [
  {path:'multiplexhome',component:MultiplexhomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplexRoutingModule { }
