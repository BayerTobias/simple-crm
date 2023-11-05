import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password!: string;

  hide = true;

  constructor(private authService: FirebaseAuthService) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUpWithEmailAndPassword() {
    const email = this.email.value || '';

    this.authService.registerWithEmailAndPassword(email, this.password);
  }
}
