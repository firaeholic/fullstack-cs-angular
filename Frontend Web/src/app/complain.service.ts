import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import ComplaintModel from './models/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private apiConfigService: ApiConfigService) { }

  getAllComplaints(): Observable<ComplaintModel[]>{
    return this.apiConfigService.getComplaints('complaints')
  }
  postAComplaint(complaint: string): Observable<ComplaintModel>{
    let data = { 'complaintText': complaint }
    return this.apiConfigService.postComplaint('complaints', data)
  }
}