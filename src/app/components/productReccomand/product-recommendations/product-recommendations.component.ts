import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.scss']
})
export class ProductRecommendationsComponent implements OnInit {
  recommendations: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRecommendations().subscribe((products: Product[]) => {
      this.recommendations = products;
    });
  }

  fetchRecommendations(): Observable<Product[]> {
    // Replace 'your-backend-url' with the actual URL of your backend endpoint
    return this.http.get<Product[]>('your-backend-url/recommendations');
  }

  addToCart(product: Product): void {
    console.log('Adding to cart:', product);
    // Implement this method to handle adding products to the cart
    // This could involve another service or direct interaction with a backend endpoint
  }
}
