import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private baseUrl = 'http://localhost:5000'; // Adjust this URL to your backend's address

  constructor(private http: HttpClient) { }

  // Method to fetch forecast data using ARIMA model
  getArimaForecast(inputData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/forecast/arima`, inputData);
  }

  // Method to fetch forecast data using LSTM model
  getLstmForecast(inputData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/forecast/lstm`, inputData);
  }
}
