// prediction.component.ts

import { Component } from '@angular/core';
import { PredictionService } from '../../services/prediction.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent {
  predictionInput = {
    customerAge: null,
    lastPurchaseAmount: null
    // Add more fields as required by your prediction model
  };

  predictionResult: any;

  constructor(private predictionService: PredictionService) { }

  onPredict(): void {
    // Call the prediction service with the predictionInput data
    this.predictionService.predict(this.predictionInput).subscribe({
      next: (result) => {
        this.predictionResult = result;
      },
      error: (error) => {
        console.error('Prediction error:', error);
      }
    });
  }
}
