import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public reservationservice: ReserveserviceService) { }

  ngOnInit() {
  }

}
