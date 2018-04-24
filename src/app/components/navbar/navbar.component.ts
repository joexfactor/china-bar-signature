import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: NgbDateStruct;
  date: {
    year: number,
    month: number,
    day: number
  };

  constructor() { }

  ngOnInit() {
  }

}
