import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  doc,
  collection,
  onSnapshot,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);

  unsubUsers;

  users: any = [];

  constructor() {
    this, (this.unsubUsers = this.subUsers());
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  subUsers() {
    return onSnapshot(this.getUsersRef(), (user) => {
      this.users.push(user);
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }

  async newUser(data: {}) {
    await addDoc(this.getUsersRef(), data);
  }
}
