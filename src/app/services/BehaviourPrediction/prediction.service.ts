import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private baseUrl = 'http://localhost:5000'; // Adjust to match your backend server's URL

  constructor(private http: HttpClient) {}

  // Fetch predictions using the ARIMA model
  predictWithArima(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/predict/arima`, data);
  }

  // Fetch predictions using the LSTM model
  predictWithLstm(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/predict/lstm`, data);
  }
}
