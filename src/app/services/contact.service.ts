import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createContact(name: any, email: any): Observable<any> {
    const userData = {
      name,
      email
    };
    
    return this.http.post(this.apiUrl, userData);
  }

  
}
