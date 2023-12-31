import { Inject, Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private router: Router, private auth: Auth) {}

  async registerWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('user created', userCredential);
    } catch (err) {
      console.error(err);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    console.log(email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log('login successfull:', userCredential);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      console.error(err);
    }
  }
}
