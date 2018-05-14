import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutProjectComponent} from "./aboutProject/aboutProject.component";

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage/:cat', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile', component: ProfileContainerComponent},
  {path: 'about', component: AboutProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
