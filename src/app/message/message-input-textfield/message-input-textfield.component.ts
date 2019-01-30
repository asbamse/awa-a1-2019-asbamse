import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../shared/message.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-message-input-textfield',
  templateUrl: './message-input-textfield.component.html',
  styleUrls: ['./message-input-textfield.component.scss']
})
export class MessageInputTextfieldComponent implements OnInit {
  messageForm = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  });
  morseMessage: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  save() {
    const message = this.messageForm.value;
    const time = new Date();

    this.messageService.addMessage(time, this.messageService.convertToMorse(message.message).trim() ).then(done => {
      console.log('saved');
    }, err => {
      console.log(err);
    });

    this.messageForm.reset();
  }

  updateMorseMessage() {
    if (this.messageForm.invalid || this.messageForm.value.message === undefined) {
      this.morseMessage = undefined;
    } else {
      this.morseMessage = this.messageService.convertToMorse(this.messageForm.value.message);
    }
  }
}
