import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  doc,
  collection,
  onSnapshot,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);
  private usersSubject = new BehaviorSubject<any[]>([]);

  users$ = this.usersSubject.asObservable();

  unsubUsers;

  users: any = [];

  constructor() {
    this.unsubUsers = this.subUsers();
  }

  ngOnDestroy() {
    this.unsubUsers();
  }

  subUsers() {
    return onSnapshot(
      this.getUsersRef(),
      (querySnapshot) => {
        this.users = [];
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          this.users.push(user);
          console.log(doc.id);
        });

        this.usersSubject.next(this.users);
      },
      (error) => {
        console.error('Error getting users:', error);
      }
    );
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
