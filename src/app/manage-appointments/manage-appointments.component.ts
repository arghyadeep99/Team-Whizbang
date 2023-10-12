import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css'],
})

export class ManageAppointmentsComponent {
  sos = false;
  checkin = false;
  checkout = false;
  constructor(private http: HttpClient,
  ) { }

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
  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net"
  })

  isCheckInVisible(dateTime: Date): boolean {
    const now = new Date();
    const fifteenMinutes = 15 * 60 * 1000;
    return (now < new Date(dateTime) && (new Date(dateTime).getTime() - now.getTime()) <= fifteenMinutes);
  }

  getLocationcheckin() {

    this.checkin = true
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('Latitude: ' + latitude)
        console.log('Longitude: ' + longitude)
        this.reverseGeocodecheckin(latitude, longitude);

      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getLocationcheckout() {
    debugger;
    this.checkout = true
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('Latitude: ' + latitude)
        console.log('Longitude: ' + longitude)
        this.reverseGeocodecheckout(latitude, longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getLocationsos() {
    this.sos = true
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('Latitude: ' + latitude)
        console.log('Longitude: ' + longitude)
        this.reverseGeocodesos(latitude, longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  callcheckout(location) {

    let datetime = (new Date()).toISOString()
    let payload = { "body": { "checkout_time": datetime, "checkout_loc": location } }
    this.http.post("https://whizbang-codefest-api.azurewebsites.net/sessions/7/checkout", payload, { headers: this.header })
      .subscribe({
        next: (data) => {
          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });

  }

  callcheckin(location) {
    (document.getElementById('checkin') as HTMLInputElement).disabled = false;
    let datetime = (new Date()).toISOString()
    let payload = { "body": { "checkin_time": datetime, "checkin_loc": location } }
    this.http.post("https://whizbang-codefest-api.azurewebsites.net/sessions/7/checkin", payload, { headers: this.header })
      .subscribe({
        next: (data) => {
          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });

  }

  callsos(location) {
    let datetime = (new Date()).toISOString()
    let payload = { "body": { "sos_time": datetime, "sos_loc": location } }
    this.http.post("https://whizbang-codefest-api.azurewebsites.net/sessions/7/sos", payload, { headers: this.header })
      .subscribe({
        next: (data) => {
          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });

  }

  reverseGeocodecheckout(latitude: Number, longitude: Number) {
    const apiKey = 'RvCALJldkvUTNkJK7lXBYZWZaaV9VpdW-F9p2pNDwow';
    const apiUrl = `https://atlas.microsoft.com/reverseGeocode?api-version=2022-12-01-preview&coordinates=${longitude},${latitude}&subscription-key=${apiKey}`;

    this.http.get(apiUrl)
      .subscribe({
        next: (data) => {

          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
          this.callcheckout(data['features'][0]['properties']['address']['formattedAddress'])
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });
  }

  reverseGeocodecheckin(latitude: Number, longitude: Number) {
    const apiKey = 'RvCALJldkvUTNkJK7lXBYZWZaaV9VpdW-F9p2pNDwow';
    const apiUrl = `https://atlas.microsoft.com/reverseGeocode?api-version=2022-12-01-preview&coordinates=${longitude},${latitude}&subscription-key=${apiKey}`;

    this.http.get(apiUrl)
      .subscribe({
        next: (data) => {

          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
          this.callcheckin(data['features'][0]['properties']['address']['formattedAddress'])
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });
  }

  reverseGeocodesos(latitude: Number, longitude: Number) {
    const apiKey = 'RvCALJldkvUTNkJK7lXBYZWZaaV9VpdW-F9p2pNDwow';
    const apiUrl = `https://atlas.microsoft.com/reverseGeocode?api-version=2022-12-01-preview&coordinates=${longitude},${latitude}&subscription-key=${apiKey}`;

    this.http.get(apiUrl)
      .subscribe({
        next: (data) => {

          console.log('Formatted Address: ' + data['features'][0]['properties']['address']['formattedAddress']);
          this.callsos(data['features'][0]['properties']['address']['formattedAddress'])
        },
        error: (error) => {
          console.error('Error while performing reverse geocoding:', error);
        }
      });
  }

}
function DateTime() {
  throw new Error('Function not implemented.');
}

