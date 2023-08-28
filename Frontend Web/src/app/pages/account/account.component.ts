import { Component } from '@angular/core';
import UserModel from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  currentUser: UserModel | null = null;

  constructor(
    private router: Router,
    private userService: UserService
  ){}

  ngOnInit(): void {
  
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      this.currentUser = JSON.parse(currentUserString);
    }
  }

  logoutClick(){
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      localStorage.removeItem('currentUser');
      this.currentUser = null;
      this.router.navigate(['home']);
    }
  }

  deleteAccount(email: string){
      this.userService.deleteAuser(email).subscribe(
        () => {
          const currentUserString = localStorage.getItem('currentUser');
          if (currentUserString) {
            localStorage.removeItem('currentUser');
            alert("Account successfully deleted!");
            this.currentUser = null;
            this.router.navigate(['home']);
          }
        }
      );
  }
}
