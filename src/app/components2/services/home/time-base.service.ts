import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimeBaseService {
  constructor(private http: HttpClient) {}

  // getProductData(time: any): Observable<any> {
  //   // Prepare HTTP parameters
  //   let params = new HttpParams().set('time', time);
  
  //   // If you have headers to add, prepare them as well
  //   let headers = new HttpHeaders({
  //     // Add your headers here if needed
  //     'Content-Type': 'application/json'
  //   });
  
  //   // Make the POST request
  //   return this.http.post('http://localhost:5000/api/arimarecommendations', {
  //     params: params,
  //     headers: headers
  //   });
  // }

  getProductData(time: any): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}arimarecommendations?time=${time}`);
  }
}
