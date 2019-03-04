import { Injectable } from '@angular/core';
import {MessageServiceModule} from '../message-service.module';

@Injectable({
  providedIn: MessageServiceModule
})
export class UpdateMessageService {

  constructor() { }
}
