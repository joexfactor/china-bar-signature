import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../admin/reservations/shared/reserveservice.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers: [ReserveserviceService]
})
export class BookingsComponent implements OnInit {

  constructor(private reservationservice: ReserveserviceService) { }

  ngOnInit() {
  }

}
