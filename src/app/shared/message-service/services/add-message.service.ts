import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ValidateMessageService} from './validate-message.service';
import {Message} from '../models/message';
import {from, Observable} from 'rxjs/';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  constructor(private db: AngularFirestore, private validationService: ValidateMessageService) { }

  addMessage(message: Message): Observable<Message> {
    if (message.time && this.validationService.messageOk(message.message)) {
      const stripId = message;
      delete stripId.id;

      return from(
        this.db.collection('messages').add(stripId)
      ).pipe(
        map(messageRef => {
          message.id = messageRef.id;
          return message;
        })
      );
    } else {
      return Observable.create(obs => { obs.error('Value is not a valid morse code'); });
    }
  }
}
