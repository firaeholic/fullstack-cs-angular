import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import UserModel from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiConfigService: ApiConfigService) { }

  getAUser(email: string, password: string): Observable<UserModel>{
    return this.apiConfigService.getUser(`users/${email}/${password}`)
  }
  registerAUser(fullname: string, username: string, email: string, password: string): Observable<UserModel>{
    let data = { 'Fullname': fullname, 'UserName': username, 'Email': email, 'Password': password }
    return this.apiConfigService.registerUser('users', data)
  }
  deleteAuser(email: string){
    return this.apiConfigService.deleteUser(`users/delete/${email}`)
  }
  emailExist(email: string): Observable<UserModel> {
    return this.apiConfigService.emailExists(`users/${email}`)
  }

}
