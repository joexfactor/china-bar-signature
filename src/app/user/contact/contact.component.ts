import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { EmailModel } from '../../services/email.model';


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
  name: string;
  email: string;
  message: string;

  model = new EmailModel();



  constructor(private emailService: EmailService) {
    this.zoom = 12;
    this.isOpen = true;
  }
  submitted = false;
  onSubmit(contactForm: NgForm) {
    this.submitted = true;
    console.log(this.model);
    this.emailService.sendEmail(this.model);
  }



  ngOnInit() {
    // Chinabar Burwood Location
    this.latitude = -37.855268;
    this.longitude = 145.165907;
  }

}
