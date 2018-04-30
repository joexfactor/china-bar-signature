import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { OfferComponent } from './user/offer/offer.component';
import { MenuComponent } from './user/menu/menu.component';
import { NewsComponent } from './user/news/news.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { ContactComponent } from './user/contact/contact.component';
import { FooterComponent } from './user/footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { ReservationComponent } from './admin/reservations/reservation/reservation.component';
import { ReservationListComponent } from './admin/reservations/reservation-list/reservation-list.component';
import { AdminComponent } from './admin/admin.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingComponent } from './bookings/booking/booking.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
<<<<<<< HEAD
  { path: '', component: UserComponent },
  { path: 'admin', component: AdminComponent }
=======
  {path: '', component: UserComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'book', component: BookingsComponent},
  {path: 'reservations', component: ReservationsComponent},
>>>>>>> 01363acb1736828353010d6de124807cf8bd7d4a
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OfferComponent,
    MenuComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    ReservationsComponent,
    ReservationComponent,
    ReservationListComponent,
    AdminComponent,
    UserComponent,
    BookingsComponent,
    BookingComponent,
    BookingListComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgjxLOMflam6_646mkR686HaTQ7K2nFP0'
    }),

    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()

>>>>>>> 01363acb1736828353010d6de124807cf8bd7d4a
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
