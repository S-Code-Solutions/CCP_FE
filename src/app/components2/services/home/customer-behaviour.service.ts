import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerBehaviourService {

  constructor(private http: HttpClient) {}

  getUserData(customer_id: any): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}predict/comprehensive?customer_id=${customer_id}`);
  }
}
