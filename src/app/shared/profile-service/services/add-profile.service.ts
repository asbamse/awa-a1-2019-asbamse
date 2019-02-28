import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable, from} from 'rxjs/';
import {map, switchMap} from 'rxjs/operators';
import {Profile} from '../models/profile';
import {UploadFileService} from '../../fileupload-service/services/upload-file.service';
import {HashingService} from '../../hashing-service/hashing.service';
import {ProfileServiceModule} from '../profile-service.module';

@Injectable({
  providedIn: ProfileServiceModule
})
export class AddProfileService {

  constructor(private db: AngularFirestore,
              private uploadFileService: UploadFileService,
              private hashingService: HashingService) { }

  addProfile(profile: Profile, file: File): Observable<Profile> {
    // Password stuff
    profile.dateCreated = new Date();
    profile.password = this.hashingService.hashPassword(profile.dateCreated.valueOf().toString(), profile.password);

    // Add stuff
    const stripped = profile;
    delete stripped.id;
    delete stripped.pictureUrl;

    // Add Profile
    return from(
      this.db.collection('profiles').add(stripped)
    ).pipe(
      switchMap(profileRef => {
        // Map Add Image
        if (!profileRef) {
          throw new Error('Error creating profile');
        }
        return this.uploadFileService.uploadFile(file, 'profileImage')
          .pipe(
          switchMap(profileRef2 => {
            // Map Get Download URL
            if (!profileRef2) {
              throw new Error('Error creating profileImage');
            }

            return profileRef2.downloadURL
              .pipe(
                switchMap(profileRef3 => {
                  // Map Update imgURL
                  if (!profileRef3) {
                    throw new Error('Error getting downloadURL');
                  }

                  profile.imageId = profileRef2.id;
                  return from(this.db.collection('profiles').doc(profileRef.id).update(profile))
                    .pipe(
                      // Return result
                      map(profileRef4 => {
                        profile.id = profileRef.id;
                        return profile;
                      })
                    );
              }));
          }));
      })
    );
  }
}
