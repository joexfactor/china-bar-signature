import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {EmailModel} from './email.model';


@Injectable()
export class EmailService {

  name: string;
  email: string;
  message: string;

  constructor(public http: Http)  { }

  sendEmail(model: EmailModel) {
    console.log('post');

    this.http.post(`/send`,
        {
            model
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
