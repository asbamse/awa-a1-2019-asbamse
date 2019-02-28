import { NgModule } from '@angular/core';
import { MessageRoutingModule } from './message-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MessageListComponent} from './message-list/message-list.component';
import {MessageInputMorseComponent} from './message-input-morse/message-input-morse.component';
import {MessageInputTextfieldComponent} from './message-input-textfield/message-input-textfield.component';
import {MessageViewComponent} from './message-view/message-view.component';
import {MomentModule} from 'angular2-moment';
import {TooltipModule} from 'ngx-bootstrap';
import {MessageServiceModule} from '../shared/message-service/message-service.module';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageInputMorseComponent,
    MessageInputTextfieldComponent,
    MessageViewComponent,
  ],
  imports: [
    SharedModule,
    MessageRoutingModule,
    MomentModule,
    TooltipModule.forRoot(),
    MessageServiceModule,
  ]
})
export class MessageModule { }
