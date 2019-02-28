import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ValidateMessageService} from '../../shared/message-service/services/validate-message.service';
import {Message} from '../../shared/message-service/models/message';
import {DeleteMessageService} from '../../shared/message-service/services/delete-message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[];
  @Input() latest: Message;

  take = 4;
  showPageAmount = 7;

  constructor(private messageValidateService: ValidateMessageService,
              private messageDeleteService: DeleteMessageService) {
  }

  ngOnInit() {
  }

  // Convert message from morse to readable text.
  convertMessage(message: string): string {
    return this.messageValidateService.convertToText(message);
  }

  // Convert the seconds in a TimeStamp to a date.
  convertSecondsToDate(timeStamp: any) {
    const date = new Date(timeStamp.seconds * 1000);
    return date;
  }

  deleteMessage(id: string) {
    this.messageDeleteService
      .deleteMessageById(id)
      .subscribe(
        next => { alert('Successfully deleted: "' + next.message + '"'); },
        error => { alert(error); }
      );
  }
}
