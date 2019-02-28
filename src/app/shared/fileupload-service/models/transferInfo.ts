import {Observable} from 'rxjs/internal/Observable';
import {Subject} from 'rxjs/internal/Subject';

export interface TransferInfo {
  id: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
}
