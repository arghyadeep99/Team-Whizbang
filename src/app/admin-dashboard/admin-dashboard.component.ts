import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  referred: any
  closed: any
  funds: any
  counsellor: any
  highrisk: any
  constructor(private http: HttpClient) { }

  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "https://whizbang-codefest-api.azurewebsites.net",
    "Access-Control-Allow-Headers": "*"
  })

  ngOnInit(): void {
    this.http.get("https://whizbang-codefest-api.azurewebsites.net/cases/referred", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.referred = data
        console.log(this.referred)

      }
    })

    this.http.get("https://whizbang-codefest-api.azurewebsites.net/cases/closed", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.closed = data
        console.log(this.closed)

      }
    })

    this.http.get("https://whizbang-codefest-api.azurewebsites.net/cases/funds", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.funds = data
        console.log(this.funds)

      }
    })

    this.http.get("https://whizbang-codefest-api.azurewebsites.net/cases/counsellor", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.counsellor = data
        console.log(this.counsellor)

      }
    })

    this.http.get("https://whizbang-codefest-api.azurewebsites.net/cases/highrisk", { headers: this.header }).subscribe(data => {
      if (data != undefined) {
        this.highrisk = data
        console.log(this.highrisk)

      }
    })
  }

}
