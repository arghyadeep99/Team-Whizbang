import { Component, OnInit } from '@angular/core';

const active = [
  {
    id: 1,
    title: 'Appointment 1',
    dateTime: '2023-10-12T01:15:00',
    status: 'Active',
  },
];

const upcoming = [
  {
    id: 1,
    title: 'Appointment 1',
    dateTime: '2023-10-12T01:15:00',
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'Appointment 2',
    dateTime: '2023-10-20T11:30:00',
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'Appointment 0',
    dateTime: '2023-10-10T11:30:00',
    status: 'Upcoming',
  },
  
  {
    id: 2,
    title: 'Appointment 0',
    dateTime: '2023-10-10T11:30:00',
    status: 'Upcoming',
  },
];

const completed = [
    {
    id: 2,
    title: 'Appointment 0',
    dateTime: '2023-10-10T11:30:00',
    status: 'Completed',
  },
];

@Component({
  selector: 'manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})

export class ManageAppointmentsComponent implements OnInit {
  active = active;
  upcoming = upcoming;
  completed = completed;

  constructor() { }

  ngOnInit(): void {
  }

  isCheckInVisible(dateTime: Date): boolean {
    const now = new Date();
    const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
    return (now < new Date(dateTime) && (new Date(dateTime).getTime() - now.getTime()) <= fifteenMinutes);
  }
}
