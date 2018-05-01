import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmailService {

  name: string;
  email: string;
  message: string;

  constructor(public http: Http)  { }

  httpPostExample() {
    console.log('post');

    this.http.post(`/send`,
        {
            'courseListIcon': '...',
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
