import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public reservationservice: ReserveserviceService,
              private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(reservationForm: NgForm) {
    // if the key is null, it is a new item, use insert, else use update
    if (reservationForm.value.$key === null) {
      this.reservationservice.insertReservation(reservationForm.value);
      this.tostr.success('Submitted Successfully', 'Reservation Register');
    } else {
      this.reservationservice.updateReservation(reservationForm.value);
      this.tostr.success('Modified Successfully', 'Reservation Register');
    }
    this.resetForm(reservationForm);
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
      no_of_people: '',
      phone: '',
      book_date: '',
      session: '',
      book_message: '',
    };
  }
}
