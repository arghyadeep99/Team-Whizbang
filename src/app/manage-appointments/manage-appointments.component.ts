import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css'],
})

export class ManageAppointmentsComponent {
  constructor(private http: HttpClient) { }

  active = [
    {
      id: 1,
      title: 'Appointment 1',
      dateTime: '2023-10-12T01:15:00',
      status: 'Active',
    },
  ];
  upcoming = [
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

  completed = [
    {
      id: 2,
      title: 'Appointment 0',
      dateTime: '2023-10-10T11:30:00',
      status: 'Completed',
    },
  ];

  isCheckInVisible(dateTime: Date): boolean {
    const now = new Date();
    const fifteenMinutes = 15 * 60 * 1000;
    return (now < new Date(dateTime) && (new Date(dateTime).getTime() - now.getTime()) <= fifteenMinutes);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('Latitude: ' + latitude)
        console.log('Longitude: ' + longitude)
        this.reverseGeocode(latitude, longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  reverseGeocode(latitude : Number, longitude : Number) {
    const apiKey = 'RvCALJldkvUTNkJK7lXBYZWZaaV9VpdW-F9p2pNDwow';
    const apiUrl = `https://atlas.microsoft.com/reverseGeocode?api-version=2022-12-01-preview&coordinates=${longitude},${latitude}&subscription-key=${apiKey}`;

    this.http.get(apiUrl)
      .subscribe({
        next: (data) => {
          console.log('Formatted Address: '+ data['features'][0]['properties']['address']['formattedAddress']);
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });
  }

}
