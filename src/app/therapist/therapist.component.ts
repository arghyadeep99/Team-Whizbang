import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css']
})
export class TherapistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    name: '',
    email: '',
    // Add more properties for other form fields
  };

  onSubmit() {
    // Handle the form submission here
  }

}
