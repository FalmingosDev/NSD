import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatorcontentComponent } from './creatorcontent/creatorcontent.component'; 
import { CreatorcontentdetailsComponent } from './creatorcontentdetails/creatorcontentdetails.component'; 
import { CreatorcontenteditComponent } from './creatorcontentedit/creatorcontentedit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JoinascreatorComponent } from './joinascreator/joinascreator.component';
import { CreatorcontentaddComponent } from './creatorcontentadd/creatorcontentadd.component';

 
const routes: Routes = [
  {path:'creatorcontent', component:CreatorcontentComponent},
<<<<<<< Updated upstream
  {path:'creatorcontentdetails/:id', component:CreatorcontentdetailsComponent},
=======
  {path:'creatorcontentdetails', component:CreatorcontentdetailsComponent},
>>>>>>> Stashed changes
  {path:'creatorcontentedit/:id', component:CreatorcontenteditComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'joinascreator', component:JoinascreatorComponent},
  {path:'creatorcontentadd', component:CreatorcontentaddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
