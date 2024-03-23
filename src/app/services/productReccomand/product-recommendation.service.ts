import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private baseUrl = 'http://localhost:5000'; // Adjust based on your backend URL

  constructor(private http: HttpClient) { }

  getRecommendations(userId: number): Observable<any> {
    // Assuming your backend expects a user ID to provide recommendations
    return this.http.get(`${this.baseUrl}/recommendations/${userId}`);
  }

  searchProducts(query: string): Observable<any> {
    // Assuming your backend provides a search functionality
    return this.http.get(`${this.baseUrl}/search`, { params: { query } });
  }

  getAssociationRules(): Observable<any> {
    // Fetching association rules that might inform product bundling or promotions
    return this.http.get(`${this.baseUrl}/association-rules`);
  }
}
