import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import UserModel from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiConfigService: ApiConfigService) { }

  logAUser(email: string, passwordHash: string): Observable<UserModel>{
    return this.apiConfigService.logUser(`users/${email}/${passwordHash}`);
  }

  registerAUser(fullname: string, username: string, email: string, passwordHash: string): Observable<UserModel>{
    const data = { 'Fullname': fullname, 'UserName': username, 'Email': email, 'PasswordHash': passwordHash };
    return this.apiConfigService.registerUser('users', data);
  }

  deleteAuser(email: string){
    return this.apiConfigService.deleteUser(`users/delete/${email}`);
  }
  
  checkIfUserExists(email: string): Observable<UserModel> {
    return this.apiConfigService.checkIfEmailAlreadyExists(`users/${email}`);
  }

}
