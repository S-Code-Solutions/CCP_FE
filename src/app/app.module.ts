import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRecommendationComponent } from './components/precommendation/precommendation.component';
import { RecommendationService } from './services/personalRecommendation/recommendation.service';
import { ForecastComponent } from './components/BehaviourPredictions/forecast/forecast.component';
import { PredictionComponent } from './components/BehaviourPredictions/prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    PRecommendationComponent,
    ForecastComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecommendationService  // Provide the RecommendationService to be used across the application
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
