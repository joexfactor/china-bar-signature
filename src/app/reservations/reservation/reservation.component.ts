import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public reservationservice: ReserveserviceService) { }

  ngOnInit() {
    this.reservationservice.getData();
    this.resetForm();
  }
  onSubmit(reservationForm: NgForm) {
    // if the key is null, it is a new item, use insert, else use update
    this.reservationservice.insertReservation(reservationForm.value);
    this.resetForm(reservationForm);
   // this.tostr.success('Submitted Successfully', 'Employee Register');

  }
  resetForm(reservationForm?: NgForm) {
    if (reservationForm != null) {
      reservationForm.reset();
    }
    this.reservationservice.selectedReservation = {
      $key: null,
      first_name: '',
      last_name: '',
      email: '',
      no_of_people: 0,
      phone: '',
      book_date: '',
      session: '',
      book_message: '',
    };
  }
}
