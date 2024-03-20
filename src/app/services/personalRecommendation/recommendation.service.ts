import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/app/environments/environment'; // Adjust the path as necessary
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiUrl = `${environment.apiUrl}/recommendations`; // Adjust the endpoint as necessary

  constructor(private http: HttpClient) { }

  getRecommendations(userId: number, numRecommendations: number): Observable<Product[]> {
    // The body of the POST request matches the expected payload by the backend.
    const requestBody = { user_id: userId, num_recommendations: numRecommendations };
    return this.http.post<Product[]>(this.apiUrl, requestBody);
  }
}
