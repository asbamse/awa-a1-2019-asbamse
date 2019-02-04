import { Component, OnInit } from '@angular/core';
import {GetMessageService} from '../../shared/message-service/services/get-message.service';
import {Message} from '../../shared/message-service/models/message';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {
  title = 'Morse App';
  messages: Message[];
  latest: Message;

  constructor(private messageGetService: GetMessageService) {
    this.messageGetService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }

  ngOnInit() {
  }
}
