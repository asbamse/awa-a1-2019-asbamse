import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class DeleteMessageService {

  constructor(private db: AngularFirestore) { }

  deleteMessageById(id: string): Promise<Message> {

    return new Promise((resolve, reject) => {
      this.db.collection<Message>('messages').doc(id).delete().then(() => {
        resolve('Success');
      }).catch(err => {
        reject(err);
      });
    });
  }
}
