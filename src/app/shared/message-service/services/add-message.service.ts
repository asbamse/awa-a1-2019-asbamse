import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ValidateMessageService} from './validate-message.service';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  constructor(private db: AngularFirestore, private validationService: ValidateMessageService) { }

  addMessage(message: Message): Promise<Message> {
    if (message.time && this.validationService.messageOk(message.message)) {
      const messageCollection = this.db.collection<any>('messages');
      const stripId = message;
      delete stripId.id;

      return new Promise<Message>((resolve, reject) => {
        messageCollection.add(stripId).then(result => {
          result.get().then(r2 => {
            return resolve({ Id: result.id, ...r2.data() });
          }).catch(err => {
            reject(err);
          });
        }).catch(err => {
          reject(err);
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        reject('Value is not a valid morse code');
      });
    }
  }
}
