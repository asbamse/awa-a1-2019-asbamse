import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../shared/message.service';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: any[];
  @Input() latest: any;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

  convertSecondsToDate(timeStamp: any) {
    let date = new Date(timeStamp.seconds * 1000);
    return date;
  }
}
