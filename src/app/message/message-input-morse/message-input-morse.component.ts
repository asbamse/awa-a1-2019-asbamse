import { Component, OnInit } from '@angular/core';
import {ValidateMessageService} from '../../shared/message-service/services/validate-message.service';
import {AddMessageService} from '../../shared/message-service/services/add-message.service';
import {Message} from '../../shared/message-service/models/message';

@Component({
  selector: 'app-message-input-morse',
  templateUrl: './message-input-morse.component.html',
  styleUrls: ['./message-input-morse.component.scss']
})
export class MessageInputMorseComponent implements OnInit {
  message = '';
  humanReadableMessage = '';
  time: number;

  constructor(private messageAddService: AddMessageService,
              private messageValidateService: ValidateMessageService) { }

  ngOnInit() {
  }

  send() {
    const time = new Date();

    const newMessage: Message = { id: '', message: this.message.trim(), time: time }

    this.messageAddService.addMessage(newMessage).then(done => {
      console.log('saved - ' + done.id + ', ' + done.message + ', ' + done.time);
    }, err => {
      console.log(err);
    });
    this.clear();
  }

  morse(active) {
    if (active) {
      this.time = (new Date()).getTime();
    } else {
      const clickTime = (new Date()).getTime() - this.time;
      if (clickTime > 120) {
        this.message += '-';
      } else {
        this.message += '.';
      }
      this.time = -1;
    }
  }

  space() {
    this.message += '/';
    this.humanReadableMessage = this.messageValidateService.convertToText(this.message);
  }

  next() {
    this.message += ' ';
    this.humanReadableMessage = this.messageValidateService.convertToText(this.message);
  }

  clear() {
    this.message = '';
    this.humanReadableMessage = '';
  }
}
