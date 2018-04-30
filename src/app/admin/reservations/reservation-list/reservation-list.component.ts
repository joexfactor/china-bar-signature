import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';

import { Reservation } from '../shared/reservation.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservationList: Reservation[];
  constructor(private reservationservice: ReserveserviceService,
              private tostr: ToastrService) { }

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
    if (confirm('Are you sure to delete this record ? ') === true) {
      this.reservationservice.deleteReservation($key);
      this.tostr.warning('Deleted Successfauly', 'Reservarion register');
    }
  }
}
