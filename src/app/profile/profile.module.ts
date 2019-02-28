import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileRegisterComponent} from './profile-register/profile-register.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileLoginComponent} from './profile-login/profile-login.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {SharedModule} from '../shared/shared.module';
import {ProfileServiceModule} from '../shared/profile-service/profile-service.module';
import {FileuploadServiceModule} from '../shared/fileupload-service/fileupload-service.module';

@NgModule({
  declarations: [
    ProfileRegisterComponent,
    ProfileDetailsComponent,
    ProfileLoginComponent,
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule,
    ImageCropperModule,
    ProfileServiceModule,
    FileuploadServiceModule,
  ],
  exports: [
  ]
})
export class ProfileModule { }
