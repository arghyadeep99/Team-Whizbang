import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ReferralComponent } from './referral/referral.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { UserJourneyComponent } from './user-journey/user-journey.component';

import { HttpClientModule } from '@angular/common/http';

import { ManageTherapistComponent } from './manage-therapist/manage-therapist.component';
import { ManageSessionsComponent } from './manage-sessions/manage-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReferralComponent,
    ManageAppointmentsComponent,
    UserJourneyComponent,
    ManageTherapistComponent,
    ManageSessionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
