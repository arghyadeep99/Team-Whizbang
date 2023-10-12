import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manage-sessions',
  templateUrl: './manage-sessions.component.html',
  styleUrls: ['./manage-sessions.component.css']
})

export class ManageSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = [
    {
      id: 1,
      title: 'Appointment 1',
      therapistName: 'Arghyadeep',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Appointment 2',
      therapistName: 'Shreeya',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Appointment 3',
      therapistName: 'Shwetali',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'Active',
    },
  ];

  sos = [
    {
      id: 1,
      title: 'Appointment 1',
      therapistName: 'Arghyadeep',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'SOS',
    },
    {
      id: 2,
      title: 'Appointment 2',
      therapistName: 'Shreeya',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'SOS',
    },
    {
      id: 3,
      title: 'Appointment 3',
      therapistName: 'Shwetali',
      dateTime: '2023-10-12T01:15:00',
      endTime: '2023-10-12T01:15:00',
      status: 'SOS',
    },
  ];

}
