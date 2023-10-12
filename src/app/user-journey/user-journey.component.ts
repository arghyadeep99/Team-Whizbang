import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';



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
  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net",
    "Access-Control-Allow-Headers": "*"
  })
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get("https://whizbang-codefest-api.azurewebsites.net/helloworld", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        console.log(data)
      }
    })
  }

  journeyStatus(status) {
    this.userJourney = status
  }

}
