import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: any[];
  @Input() latest: any;

  take = 4;
  showPageAmount = 5;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  // Convert message from morse to readable text.
  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

  // Convert the seconds in a TimeStamp to a date.
  convertSecondsToDate(timeStamp: any) {
    const date = new Date(timeStamp.seconds * 1000);
    return date;
  }
}
