import { Component } from '@angular/core';
import {MessageService} from './message/shared/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Morse App';
  messages: any[];
  latest: any;

  constructor(private messageService: MessageService) {
    this.messageService.getMessagesLastByLimit(5).subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }
}
