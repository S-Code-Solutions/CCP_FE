import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { RecommendationService } from 'src/app/services/personalRecommendation/recommendation.service';

@Component({
  selector: 'app-precommendation',
  templateUrl: './precommendation.component.html',
  styleUrls: ['./precommendation.component.scss'],
})
export class PRecommendationComponent {
  recommendations: Product[] = [];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.fetchRecommendations();
  }

  fetchRecommendations(): void {
    // Assuming the recommendation service needs a user ID and the number of recommendations.
    // These values can be dynamically set based on your application's requirements.
    const userId = 1; // Example user ID
    const numRecommendations = 10; // Example: fetch 10 recommendations

    this.recommendationService.getRecommendations(userId, numRecommendations).subscribe({
      next: (data) => {
        this.recommendations = data;
      },
      error: (error) => {
        console.error('There was an error fetching the recommendations:', error);
      }
    });
  }
}
