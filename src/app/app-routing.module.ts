import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageViewComponent} from './message/message-view/message-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'message', pathMatch: 'full' },
  {
    path: 'message',
    loadChildren: './message/message.module#MessageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
