import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ComplaintModel from './models/Complaint';
import UserModel from './models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:5001';

  constructor(
    private httpClient: HttpClient
  ) { }

  getComplaints(url: string){
    return  this.httpClient.get<ComplaintModel[]>(`${this.API_BASE_URL}/complaints`);
  }

  postComplaint(url: string, data: Object){
    return  this.httpClient.post<ComplaintModel>(`${this.API_BASE_URL}/complaints`, data);
  }

  getUser(url: string){
    return  this.httpClient.get<UserModel>(`${this.API_BASE_URL}/${url}`);
  }

  registerUser(url: string, data: Object){
    return  this.httpClient.post<UserModel>(`${this.API_BASE_URL}/users`, data);
  }
  deleteUser(url: string){
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`)
  }
  emailExists(url: string){
    return this.httpClient.get<UserModel>(`${this.API_BASE_URL}/${url}`)
  }


}