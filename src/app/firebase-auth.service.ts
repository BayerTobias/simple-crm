import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private router: Router) {}

  registerWithEmailAndPassword(email: string, password: string) {}

  async loginWithEmailAndPassword(email: string, password: string) {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('login successfull:', userCredential);
      // this.router.navigate(['/dashboard']);
    } catch (err) {
      console.error(err);
    }
  }
}
