import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplexhomeComponent } from './multiplexhome/multiplexhome.component';
import { MultiplextendingComponent } from './multiplextending/multiplextending.component';
import { MultiplexwishlistComponent } from './multiplexwishlist/multiplexwishlist.component';
import { MultiplexcheckoutComponent } from './multiplexcheckout/multiplexcheckout.component';
import { RecommendedwishlistComponent } from './recommendedviewall/recommendedwishlist.component';
import { componentFactoryName } from '@angular/compiler';
import { UpcomingviewallComponent } from './upcomingviewall/upcomingviewall.component';

const routes: Routes = [
  {path:'multiplexhome',component:MultiplexhomeComponent},
  {path:'multiplextending',component:MultiplextendingComponent},
  {path:'multiplexwishlist',component:MultiplexwishlistComponent},
  {path:'multiplexcheckout/:multiplex_id',component:MultiplexcheckoutComponent},
  {path:'recommendedviewall',component:RecommendedwishlistComponent},
  {path:'upcomingviewall',component:UpcomingviewallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplexRoutingModule { }
