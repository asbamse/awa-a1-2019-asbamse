import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileLoginComponent} from '../profile/profile-login/profile-login.component';
import {ProfileDetailsComponent} from '../profile/profile-details/profile-details.component';
import {MessageViewComponent} from './message-view/message-view.component';

const routes: Routes = [
  { path: '', component: MessageViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
