import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../shared/reserveservice.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationservice: ReserveserviceService) { }

  ngOnInit() {
  }

}
