import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { EmailModel} from './email.model';
import { NgModule } from '@angular/core';

@Injectable()
export class EmailService {

  name: string;
  email: string;
  message: string;

  constructor(public http: HttpClient)  { }

  sendEmail(model: EmailModel) {
    this.http.post(`/contact`,
        {
            name: model.name,
            email: model.email,
            message: model.message
        })
        .subscribe(
            (val) => {
                console.log('POST call successful value returned in body',
                            val);
            },
            response => {
                console.log('POST call in error', response);
            },
            () => {
                console.log('The POST observable is now completed.');
            });
    }
}
