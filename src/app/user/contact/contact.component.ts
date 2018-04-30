import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  isOpen: boolean;

  constructor() {
    this.zoom = 12;
    this.isOpen = true;
  }

  ngOnInit() {
    // Chinabar Burwood Location
    this.latitude = -37.855268;
    this.longitude = 145.165907;
  }

}
