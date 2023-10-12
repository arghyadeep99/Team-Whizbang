import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ManageAppointmentsComponent } from './manage-appointments/manage-appointments.component';
import { UserJourneyComponent } from './user-journey/user-journey.component';
import { ManageTherapistComponent } from './manage-therapist/manage-therapist.component';
import { ManageSessionsComponent } from './manage-sessions/manage-sessions.component';
import { TherapistComponent } from './therapist/therapist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'therapist', component: TherapistComponent },
  { path: 'manage-appointments', component: ManageAppointmentsComponent },
  { path: 'manage-therapist', component: ManageTherapistComponent },
  { path: 'manage-sessions', component: ManageSessionsComponent },
  { path: 'user-journey', component: UserJourneyComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
