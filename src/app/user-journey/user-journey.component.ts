import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'user-journey',
  templateUrl: './user-journey.component.html',
  styleUrls: ['./user-journey.component.css']
})
export class UserJourneyComponent implements OnInit {

  active = [
    {
      id: 1,
      title: 'Appointment 1',
      dateTime: '2023-10-12T01:15:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Active',
    },
  ]

  upcoming = [
    {
      id: 1,
      title: 'Appointment 1',
      dateTime: '2023-10-12T01:15:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Appointment 2',
      dateTime: '2023-10-20T11:30:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Upcoming',
    },
    {
      id: 2,
      title: 'Appointment 0',
      dateTime: '2023-10-10T11:30:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Upcoming',
    },

    {
      id: 2,
      title: 'Appointment 0',
      dateTime: '2023-10-10T11:30:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Upcoming',
    },
  ];

  completed = [
    {
      id: 2,
      title: 'Appointment 0',
      dateTime: '2023-10-10T11:30:00',
      therapist: 'Arghyadeep',
      feedback: 'Feedback',
      status: 'Completed',
    },
  ];
  userJourney = 1
  constructor() { }


  ngOnInit(): void {
  }

  journeyStatus(status) {
    this.userJourney = status
  }

}
