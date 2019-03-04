import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Message} from '../models/message';
import {map, switchMap} from 'rxjs/operators';
import {from, Observable, throwError} from 'rxjs/';
import {MessageServiceModule} from '../message-service.module';

@Injectable({
  providedIn: MessageServiceModule
})
export class DeleteMessageService {

  constructor(private db: AngularFirestore) { }

  deleteMessageById(id: string): Observable<Message> {
    return this.db.collection<Message>('messages').doc(id)
      .get()
      .pipe(
        switchMap(messageDocument => {
          if (!messageDocument || !messageDocument.data()) {
            return throwError('Message not found');
          } else {
            return from(
              this.db.collection<Message>('messages').doc(id).delete()
            ).pipe(
              map(() => {
                const data = messageDocument.data() as Message;
                data.id = messageDocument.id;
                return data;
              })
            );
          }
        })
      );
  }
}
