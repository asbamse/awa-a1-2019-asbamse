import { NgModule } from '@angular/core';
import {ProfileLoginComponent} from './profile-login/profile-login.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: ProfileLoginComponent },
  { path: 'details/:id', component: ProfileDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule {}
