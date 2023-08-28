import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from '../config/api-config.service';
import ComplaintModel from '../../models/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private apiConfigService: ApiConfigService) { }
  
  postAComplaint(complaint: string): Observable<ComplaintModel>{
    const data = { 'complaintText': complaint };
    return this.apiConfigService.postComplaint('complaints', data);
  }
}
