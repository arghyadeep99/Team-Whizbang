import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manage-sessions',
  templateUrl: './manage-sessions.component.html',
  styleUrls: ['./manage-sessions.component.css']
})

export class ManageSessionsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  details: any
  ngOnInit(): void {
    this.callsesion()
  }

  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net"
  })

  callsesion() {
    this.http.post("https://whizbang-codefest-api.azurewebsites.net/sessions/6/get_details", { headers: this.header })
      .subscribe({
        next: (data) => {
          if (data != undefined) {
            this.details = data
            console.log(this.details)
          }


        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });

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
