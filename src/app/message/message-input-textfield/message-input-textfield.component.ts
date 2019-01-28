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

    this.messageService.addMessage(time, this.convertToMorse(message.message).trim() ).then(done => {
      console.log('saved');
    }, err => {
      console.log(err);
    });

    this.messageForm.reset();
  }

  convertToMorse(text: string): string {
    let morse = '';
    const morseAlphabet = this.reversedMorseAlphabetMap();
    const chars = text.toString().toUpperCase().split('');

    let wasSpace = true;
    for (const char of chars) {
      const letter = morseAlphabet[char];
      if (letter !== undefined) {
        if (letter === '/') {
          morse += letter;
          wasSpace = true;
        } else {
          if (wasSpace) {
            morse += letter;
            wasSpace = false;
          } else {
            morse += ' ';
            morse += letter;
          }
        }
      } else {
        morse += char;
      }
    }

    return morse;
  }

  reversedMorseAlphabetMap() {
    const morseAlphabet = this.messageService.getReverseMorseAlphabet();
    const reversedMap = {};

    var num = Object.keys(morseAlphabet);
    num.forEach(function (key) {
      reversedMap[morseAlphabet[key]] = key;
    });

    return reversedMap;
  }

  updateMorseMessage() {
    if (this.messageForm.invalid || this.messageForm.value.message === undefined) {
      this.morseMessage = undefined;
    } else {
      this.morseMessage = this.convertToMorse(this.messageForm.value.message);
    }
  }
}
