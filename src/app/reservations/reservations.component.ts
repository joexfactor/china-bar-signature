import { Component, OnInit } from '@angular/core';
import { ReserveserviceService } from './shared/reserveservice.service';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  providers: [ReserveserviceService]
})
export class ReservationsComponent implements OnInit {

  constructor(private reservationservice: ReserveserviceService) { }

  ngOnInit() {
  }

}
