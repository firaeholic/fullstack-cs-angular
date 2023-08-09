import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import UserModel from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiConfigService: ApiConfigService) { }

  logAUser(email: string, password: string): Observable<UserModel>{
    return this.apiConfigService.logUser(`users/${email}/${password}`);
  }

  registerAUser(fullname: string, username: string, email: string, password: string): Observable<UserModel>{
    const data = { 'Fullname': fullname, 'UserName': username, 'Email': email, 'Password': password };
    return this.apiConfigService.registerUser('users', data);
  }

  deleteAuser(email: string){
    return this.apiConfigService.deleteUser(`users/delete/${email}`);
  }
  
  checkIfEmailExists(email: string): Observable<UserModel> {
    return this.apiConfigService.checkIfEmailAlreadyExists(`users/${email}`);
  }

}
