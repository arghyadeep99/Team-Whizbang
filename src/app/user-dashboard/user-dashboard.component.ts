import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user_details: any;
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net"
  })

  ngOnInit(): void {
    this.http.get("https://whizbang-codefest-api.azurewebsites.net/clients/4/get_all_cases", { headers: this.headers}).subscribe(data => {
      if (data != undefined) {
        this.user_details = data
        
        console.log(data)
        console.log(data[0][1])
      }
    })
  }

}
