import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Message} from '../models/message';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetMessageService {

  constructor(private db: AngularFirestore) { }

  getMessages(): Observable<Message[]> {
    let messageCollection: AngularFirestoreCollection<Message>;
    let messages: Observable<Message[]>;

    messageCollection = this.db.collection<Message>('messages', ref => ref.orderBy('time', 'desc'));

    messages = messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    return messages;
  }

  getMessagesLastByLimit(limit: number): Observable<Message[]> {
    let messageCollection: AngularFirestoreCollection<Message>;
    let messages: Observable<Message[]>;

    messageCollection = this.db.collection<Message>('messages', ref => ref.orderBy('time', 'desc').limit(limit));

    messages = messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    return messages;
  }

  getMessagesPaged(limit: number, startAt?: Message): Observable<Message[]> {
    let messageCollection: AngularFirestoreCollection<Message>;
    let messages: Observable<Message[]>;

    messageCollection = this.db.collection<Message>('messages', ref => ref.orderBy('time', 'desc').limit(limit).startAfter(startAt.time));

    messages = messageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Message;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    return messages;
  }
}
