import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportsEquipmentService } from '../../services/sports-equipment.service'; // Ensure correct path

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private sportsEquipmentService: SportsEquipmentService // Inject service here
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Helper to access form controls
  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    // Use service to submit form data
    this.sportsEquipmentService.registerUser(this.registrationForm.value).subscribe(
      response => {
        console.log('Registration successful:', response);
        alert('Registration successful');
      },
      error => {
        console.error('Registration failed:', error);
        alert('Registration failed');
      }
    );
  }

  clearForm() {
    this.submitted = false;
    this.registrationForm.reset();
  }
}
