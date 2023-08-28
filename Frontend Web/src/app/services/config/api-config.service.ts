import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ComplaintModel from 'src/app/models/Complaint';
import UserModel from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:5001';

  constructor(
    private httpClient: HttpClient
  ) { }

  postComplaint(url: string, data: object){
    return  this.httpClient.post<ComplaintModel>(`${this.API_BASE_URL}/${url}`, data);
  }

  logUser(url: string){
    return  this.httpClient.get<UserModel>(`${this.API_BASE_URL}/${url}`);
  }

  registerUser(url: string, data: object){
    return  this.httpClient.post<UserModel>(`${this.API_BASE_URL}/${url}`, data);
  }

  deleteUser(url: string){
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`);
  }

  checkIfEmailAlreadyExists(url: string){
    return this.httpClient.get<UserModel>(`${this.API_BASE_URL}/${url}`);
  }
}