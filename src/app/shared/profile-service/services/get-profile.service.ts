import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs/';
import {map, switchMap} from 'rxjs/operators';
import {Profile} from '../models/profile';
import {GetDownloadUrlService} from '../../fileupload-service/services/get-download-url.service';
import {ProfileServiceModule} from '../profile-service.module';

@Injectable({
  providedIn: ProfileServiceModule
})
export class GetProfileService {

  constructor(private db: AngularFirestore,
              private getDownloadUrlService: GetDownloadUrlService) { }

  getProfile(id: string): Observable<Profile> {
    let profile: AngularFirestoreDocument<Profile>;
    profile = this.db.collection<Profile>('profiles').doc(id);

    return profile.snapshotChanges()
      .pipe(
        switchMap(a => {
          if (!a.payload.exists) {
            throw new Error('Profile not found!');
          }

          const data = a.payload.data() as Profile;
          return this.getDownloadUrlService.getDownloadLink('profileImage', data.imageId)
            .pipe(map(b => {
              if (!b) {
                throw new Error('Profile Image not found!');
              }

              data.pictureUrl = b;
              const id = a.payload.id;
              return { id, ...data};
            }));
        })
      );
  }
}
