import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';
import { MultiplextendingComponent } from './multiplextending/multiplextending.component';
import { MultiplexwishlistComponent } from './multiplexwishlist/multiplexwishlist.component';

const routes: Routes = [
  {path:'multiplexhome',component:MultiplexhomeComponent},
  {path:'mutiplextending',component:MultiplextendingComponent},
  {path:'mutiplexwishlist',component:MultiplexwishlistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplexRoutingModule { }
