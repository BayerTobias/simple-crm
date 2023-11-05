import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../firebase-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  password!: string;

  constructor(private authService: FirebaseAuthService) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  loginWithEmailAndPassword() {
    const email = this.email.value || '';
    console.log(this.password);

    this.authService.loginWithEmailAndPassword(email, this.password);
  }
}
