import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLinkActive } from '@angular/router';
import { UserService } from 'src/app/user.service';
import UserModel from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    
  }
  registerUser(fullname: string, username: string, email: string, password: string){
    if(fullname && username && email && password){
      this.userService.registerAUser(fullname, username, email, password).subscribe(
        (newUser: UserModel) => {
          alert("User successfully created! Will direct to login page.")
          this.router.navigate(['login'])
        }
      )
    }else{
      alert("Fill all fields!")
    }
  }
}
