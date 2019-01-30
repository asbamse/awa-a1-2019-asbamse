import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {MessageService} from './message/shared/message.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MessageListComponent } from './message/message-list/message-list.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MessageInputMorseComponent } from './message/message-input-morse/message-input-morse.component';
import { MessageInputTextfieldComponent } from './message/message-input-textfield/message-input-textfield.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageViewComponent } from './message/message-view/message-view.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    MomentModule,
    TooltipModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
