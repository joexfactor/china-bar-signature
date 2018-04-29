import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from './reservations/shared/reserveservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ReserveserviceService]
})
export class AdminComponent implements OnInit {

  constructor(private reservationservice: ReserveserviceService) { }

  ngOnInit() {
  }

}
