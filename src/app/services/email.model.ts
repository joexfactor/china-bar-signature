import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class EmailModel {

  name: string;
  email: string;
  message: string;

  constructor() { }
}
