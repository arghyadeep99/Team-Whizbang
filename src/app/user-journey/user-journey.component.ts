import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-journey',
  templateUrl: './user-journey.component.html',
  styleUrls: ['./user-journey.component.css']
})
export class UserJourneyComponent implements OnInit {

  userJourney = 1
  constructor() { }


  ngOnInit(): void {
  }

  journeyStatus(status) {
    this.userJourney = status
  }

}
