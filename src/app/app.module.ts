import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { MessageListComponent } from './message/message-list/message-list.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MessageInputMorseComponent } from './message/message-input-morse/message-input-morse.component';
import { MessageInputTextfieldComponent } from './message/message-input-textfield/message-input-textfield.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageViewComponent } from './message/message-view/message-view.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import {MessageServiceModule} from './shared/message-service/message-service.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageInputMorseComponent,
    MessageInputTextfieldComponent,
    MessageViewComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    MessageServiceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
