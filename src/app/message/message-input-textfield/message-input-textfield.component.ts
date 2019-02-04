import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddMessageService} from '../../shared/message-service/services/add-message.service';
import {ValidateMessageService} from '../../shared/message-service/services/validate-message.service';
import {Message} from '../../shared/message-service/models/message';

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

  constructor(private messageAddService: AddMessageService,
              private messageValidateService: ValidateMessageService) { }

  ngOnInit() {
  }

  save() {
    const message = this.messageForm.value;
    const time = new Date();

    const newMessage: Message = { id: '', message: this.messageValidateService.convertToMorse(message.message).trim(), time: time }

    this.messageAddService.addMessage(newMessage).then(done => {
      console.log('saved - ' + done.id + ', ' + done.message + ', ' + done.time);
    }, err => {
      console.log(err);
    });

    this.messageForm.reset();
  }

  updateMorseMessage() {
    if (this.messageForm.invalid || this.messageForm.value.message === undefined) {
      this.morseMessage = undefined;
    } else {
      this.morseMessage = this.messageValidateService.convertToMorse(this.messageForm.value.message);
    }
  }
}
