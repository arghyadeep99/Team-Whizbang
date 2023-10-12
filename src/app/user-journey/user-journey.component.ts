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
  user_details: any
  active_cases: any[]
  closed_cases: any[]
  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net",
    "Access-Control-Allow-Headers": "*"
  })
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get("https://whizbang-codefest-api.azurewebsites.net/clients/4/get_all_cases", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.user_details = data
        console.log(this.user_details)
        // for (let detail in this.user_details) {
        //   if (detail[3] == 'waiting for funds' || detail[3] == 'new' || detail[3] == 'clinical traige') {
        //     this.active_cases.push(detail)
        //     console.log(this.active_cases)
        //   }
        //   if (detail[3] == 'closed' || detail[3] == 'referred to nhs') {
        //     this.closed_cases.push(detail)
        //     console.log(this.active_cases)
        //   }
        // }
      }
    })
  }

  journeyStatus(status) {
    this.userJourney = status
  }

}
