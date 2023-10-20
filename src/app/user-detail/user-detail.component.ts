import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  firestoreService = inject(FirestoreService);

  userId!: string;
  user: User = new User();

  constructor(private route: ActivatedRoute) {
    this.setUserId();
    this.getUser();
  }

  setUserId() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  async getUser() {
    let userData = await this.firestoreService.getUserData(
      'users',
      this.userId
    );
    this.user = new User(userData);
  }

  editUser() {}
}
