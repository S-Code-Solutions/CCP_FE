export interface Forecast {
  timestamp: string; // Assuming ISO format string for simplicity
  forecastValue: number;
  confidenceInterval?: {
    lowerBound: number;
    upperBound: number;
  };
}
