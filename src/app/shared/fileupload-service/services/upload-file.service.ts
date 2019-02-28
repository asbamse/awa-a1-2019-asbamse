import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {TransferInfo} from '../models/transferInfo';
import {finalize, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs/';
import {FileuploadServiceModule} from '../fileupload-service.module';

@Injectable({
  providedIn: FileuploadServiceModule
})
export class UploadFileService {

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  uploadFile(file: File, path: string): Observable<TransferInfo> {
    const metaData = from(this.addFileuploadMetadata(file, path));
    return metaData.pipe(
      map(fileMetaData => {
        const filePath = path + '/' + fileMetaData.id;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        const downloadUrlObservable = Observable.create(obs => {
          task.snapshotChanges().pipe(
            finalize(() => fileRef.getDownloadURL().subscribe(next => {obs.next(next)}))
          ).subscribe();
        });
        return {id: fileMetaData.id, uploadPercent: task.percentageChanges(), downloadURL: downloadUrlObservable};
      })
    );
  }

  addFileuploadMetadata(file: File, path: string) {
    const fileuploadCollection = this.db.collection<any>(path);
    return fileuploadCollection.add({
      name: file.name,
      size: file.size,
      type: file.type,
    });
  }
}
