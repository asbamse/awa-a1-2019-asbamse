import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs/internal/Observable';
import {FileuploadServiceModule} from '../fileupload-service.module';

@Injectable({
  providedIn: FileuploadServiceModule
})
export class GetDownloadUrlService {

  constructor(private storage: AngularFireStorage) { }

  getDownloadLink(path: string, id: string): Observable<string> {
    const filePath = path + '/' + id;
    const fileRef = this.storage.ref(filePath);
    return fileRef.getDownloadURL();
  }
}
