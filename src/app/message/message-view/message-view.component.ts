import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {
  title = 'Morse App';
  messages: any[];
  latest: any;

  constructor(private messageService: MessageService) {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }

  ngOnInit() {
  }
}
