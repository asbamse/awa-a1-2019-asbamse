import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../../shared/fileupload-service/services/upload-file.service';
import {Observable} from 'rxjs/internal/Observable';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-fileupload-view',
  templateUrl: './fileupload-view.component.html',
  styleUrls: ['./fileupload-view.component.scss']
})
export class FileuploadViewComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: string;

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit() { }

  uploadFile(event) {
    const file = event.target.files[0];
    this.uploadFileService.uploadFile(file, 'fileupload').subscribe(next => {
      this.uploadPercent = next.uploadPercent;
      next.downloadURL.subscribe(url => {
        this.downloadURL = url;
      });
    });
  }

}
