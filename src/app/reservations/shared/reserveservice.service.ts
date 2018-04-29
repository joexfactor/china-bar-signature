import { Injectable } from '@angular/core';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Reservation  } from './reservation.model';
@Injectable()
export class ReserveserviceService {
  reservationList: AngularFireList<any>;
  selectedReservation: Reservation = new Reservation();

  constructor(private firebase: AngularFireDatabase) { }
   getData() {
    this.reservationList = this.firebase.list('reservations');
    return this.reservationList;
    }
    insertReservation(reservation: Reservation) {
      this.reservationList.push({
        first_name: reservation.first_name,
        last_name: reservation.last_name,
        email: reservation.email,
        no_of_people: reservation.no_of_people,
        phone: reservation.phone,
        book_date: reservation.book_date,
        session: reservation.session,
        book_message: reservation.book_message
        // colum1: reservation.colum1,
        // colum2: reservation.colum2,
        // colum3: reservation.colum3
      });
    }
    updateReservation(reservation: Reservation) {
      this.reservationList.update(reservation.$key, {

        first_name: reservation.first_name,
        last_name: reservation.last_name,
        email: reservation.email,
        no_of_people: reservation.no_of_people,
        phone: reservation.phone,
        book_date: reservation.book_date,
        session: reservation.session,
        book_message: reservation.book_message
        // colum1: reservation.colum1,
        // colum2: reservation.colum2,
        // colum3: reservation.colum3
      });
    }
    deleteReservation($key: string) {
      this.reservationList.remove($key);
    }


}
