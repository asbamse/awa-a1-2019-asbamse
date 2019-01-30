import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageViewComponent} from './message/message-view/message-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full' },
  { path: 'message', component: MessageViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
