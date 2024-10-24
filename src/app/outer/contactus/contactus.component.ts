import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Submit form and display confirmation
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      console.log('Form Data: ', this.contactForm.value);
      // You can also send form data to a backend API here
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
