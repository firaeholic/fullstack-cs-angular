import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  fullname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  
  constructor(
    private router : Router,
    private userService: UserService
  ) { }
  
  registerUser(fullname: string, username: string, email: string, passwordHash: string){
    if(fullname && username && email && passwordHash){
      this.userService.registerAUser(fullname, username, email, passwordHash).subscribe({
        next: () => {
          alert("User successfully created! Will direct to login page.");
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.log(error);
        }
    });
      
    }else{
      alert("Fill all fields!");
    }
  }

  checkIfUserExists(fullname: string, username: string, email: string, passwordHash: string) {
    this.userService.checkIfUserExists(email).subscribe({
      next: () => {
        alert("Email already in use.");
      },
      error:  () => {
          this.registerUser(fullname, username, email, passwordHash);
      }
  });
  }
}

