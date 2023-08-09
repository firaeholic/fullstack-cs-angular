import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

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
  
  registerUser(fullname: string, username: string, email: string, password: string){
    if(fullname && username && email && password){
      this.userService.registerAUser(fullname, username, email, password).subscribe(
        () => {
          alert("User successfully created! Will direct to login page.");
          this.router.navigate(['login']);
        }
      );
      
    }else{
      alert("Fill all fields!");
    }
  }

  checkIfEmailExists(fullname: string, username: string, email: string, password: string) {
    this.userService.checkIfEmailExists(email).subscribe({
      next: () => {
        alert("Email already in use.");
      },
      error:  () => {
          this.registerUser(fullname, username, email, password);
      }
  });
  }
}

