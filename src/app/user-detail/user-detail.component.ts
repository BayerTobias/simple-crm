import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { FirestoreService } from '../firestore.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { Firestore } from '@angular/fire/firestore';
import { onSnapshot } from '@firebase/firestore';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  userId!: string;
  user: User = new User();

  unsubUser;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
    this.setUserId();
    this.unsubUser = this.subUser('users', this.userId);
  }

  ngOnDestroy() {
    this.unsubUser();
  }

  subUser(colId: string, userId: string) {
    return onSnapshot(
      this.firestoreService.getSingleUserRef(colId, userId),
      (snapshot) => {
        this.user = new User(snapshot.data());
      }
    );
  }

  setUserId() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  openEditUserDialog() {
    console.log(this.user);

    this.dialog.open(DialogEditUserComponent, {
      data: { user: new User(this.user), userId: this.userId },
    });
  }
}
