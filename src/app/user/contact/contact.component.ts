import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../../services/email.service';


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

  model = new EmailService();
  constructor() {
    this.zoom = 12;
    this.isOpen = true;
  }
  submitted = false;
  onSubmit(contactForm: NgForm) {
    this.submitted = true;
    console.log(contactForm.value);
  }

  ngOnInit() {
    // Chinabar Burwood Location
    this.latitude = -37.855268;
    this.longitude = 145.165907;
  }

}
