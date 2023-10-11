import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manage-therapist',
  templateUrl: './manage-therapist.component.html',
  styleUrls: ['./manage-therapist.component.css']
})
export class ManageTherapistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  therapists = [
    {
      user_type: 'Therapist',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone_no: '123-456-7890',
      dob: '01/01/1980',
      active: 'Yes',
      location: 'Area51',
      user_created_date: '01/01/2023',
      tags: 'bereavement, suicide, anger issues',
      post_code: '12345',
    },
    {
      user_type: 'Therapist',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone_no: '123-456-7890',
      dob: '01/01/1980',
      active: 'Yes',
      location: 'Area51',
      user_created_date: '01/01/2023',
      tags: 'bereavement, suicide, anger issues',
      post_code: '12345',
    },
    {
      user_type: 'Therapist',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone_no: '123-456-7890',
      dob: '01/01/1980',
      active: 'Yes',
      location: 'Area51',
      user_created_date: '01/01/2023',
      tags: 'bereavement, suicide, anger issues',
      post_code: '12345',
    },
  ];

}
