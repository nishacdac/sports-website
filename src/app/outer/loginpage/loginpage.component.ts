// loginpage.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SportsEquipmentService } from '../../services/sports-equipment.service'; // Ensure correct path
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private SportsEquipmentService: SportsEquipmentService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.SportsEquipmentService.login(this.loginForm.value).subscribe(
        (        response: any) => {
          console.log('Login successful', response);
          // Handle login success (e.g., store token, navigate to dashboard)
        },
        (        error: any) => {
          console.error('Login failed', error);
          // Handle login failure (e.g., show error message)
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // Helper methods for form controls
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
