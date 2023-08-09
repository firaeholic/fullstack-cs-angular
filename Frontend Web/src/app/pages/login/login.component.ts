import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
    ) {
    
  }
  registerClicked(){
    this.router.navigate(['register']);
  }

  logUser(email: string, password: string){
    this.userService.logAUser(email, password).subscribe({
      next: user => {

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      error: error => {
        
        if (error.status === 404) {
          alert('Incorrect Email or Password.');
        } else {
          alert(error);
        }
      }
    });
  }
}
