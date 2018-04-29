import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OfferComponent } from './components/offer/offer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationComponent } from './reservations/reservation/reservation.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { AdminComponent } from './components/admin/admin.component';
import {ToastrModule} from 'ngx-toastr';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgjxLOMflam6_646mkR686HaTQ7K2nFP0'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
