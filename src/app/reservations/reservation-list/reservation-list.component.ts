import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';

import { Reservation } from '../shared/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservationList: Reservation[];
  constructor(private reservationservice: ReserveserviceService) { }

  ngOnInit() {
    const x = this.reservationservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.reservationList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.reservationList.push(y as Reservation);
      });
    });
  }
  onEdit(reservation: Reservation) {
    this.reservationservice.selectedReservation = Object.assign({}, reservation);
  }
  onDelete($key: string) {

  }
}
