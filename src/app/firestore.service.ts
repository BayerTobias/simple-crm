import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  doc,
  getDoc,
  updateDoc,
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
  private singleUserDataSubject = new BehaviorSubject<any | null>(null);

  users$ = this.usersSubject.asObservable();
  singleUserData$ = this.singleUserDataSubject.asObservable();

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
          user['id'] = doc.id;
          this.users.push(user);
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

  async editUser(colId: string, userId: string, data: {}) {
    await updateDoc(this.getSingleUserRef(colId, userId), data);
  }
}
