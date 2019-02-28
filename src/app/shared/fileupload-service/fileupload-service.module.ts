import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  providers: [
    { provide: StorageBucket, useValue: environment.firebase.storageBucket }
  ],
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ]
})
export class FileuploadServiceModule { }
