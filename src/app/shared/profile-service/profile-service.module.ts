import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {AngularFireStorageModule, StorageBucket} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BsModalService, ComponentLoaderFactory, ModalBackdropComponent, ModalModule, PositioningService} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {AddProfileService} from './services/add-profile.service';
import {GetProfileService} from './services/get-profile.service';
import {FileuploadServiceModule} from '../fileupload-service/fileupload-service.module';

@NgModule({
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    ModalBackdropComponent,
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ModalModule,
    FileuploadServiceModule,
  ]
})
export class ProfileServiceModule { }
