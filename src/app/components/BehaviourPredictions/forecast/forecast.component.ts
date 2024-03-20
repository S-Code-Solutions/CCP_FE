import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  isLoading: boolean = true;
  forecastData: any[] | null = null;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.getForecastData();
  }

  getForecastData(): void {
    this.isLoading = true;
    this.forecastService.getForecast().subscribe({
      next: (data) => {
        this.forecastData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('There was an error fetching the forecast data:', error);
        this.isLoading = false;
        this.forecastData = null;
      }
    });
  }
}
