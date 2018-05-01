import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  firstName: string;
  lastName: string;
  email: string;
  numberOfPeople: number;
  phone: number;
  bookingDate: Date;
  session: string;
  message: string;

  constructor() { }
}
