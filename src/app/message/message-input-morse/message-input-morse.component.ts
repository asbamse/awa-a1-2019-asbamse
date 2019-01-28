import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message-input-morse',
  templateUrl: './message-input-morse.component.html',
  styleUrls: ['./message-input-morse.component.scss']
})
export class MessageInputMorseComponent implements OnInit {
  message = '';
  humanReadableMessage = '';
  time: number;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  send() {
    const time = new Date();
    this.messageService.addMessage(time, this.message.trim() ).then(done => {
      console.log('saved');
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
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  next() {
    this.message += ' ';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  clear() {
    this.message = '';
    this.humanReadableMessage = '';
  }
}
