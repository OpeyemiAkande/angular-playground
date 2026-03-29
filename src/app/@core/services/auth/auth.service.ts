import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/auth.interface';
import { map, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  user: User;
  currentUser: User;

  constructor(private http: HttpClient) {}

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      map((response) => {
        if (response.length > 0) {
          this.currentUser = response[0];
        }
        return response;
      })
    );
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
