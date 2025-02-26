import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = "http://localhost:8080/appointments";

  constructor(private http: HttpClient) { }

  getUserAppointments(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
  createAppointments(date: string, userId: string): Observable<any> {
    const appointmentData = {
      dateTime: date,
      user: {
        id: userId
      }
    };
    
    return this.http.post(this.apiUrl, appointmentData);
  }
  
}
