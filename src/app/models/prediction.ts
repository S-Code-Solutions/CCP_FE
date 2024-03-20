export interface Prediction {
    category?: string; // For classification tasks
    predictedValue: number; // For regression tasks
    probability?: number; // Confidence of the prediction, applicable in some contexts
    additionalInfo?: {
      [key: string]: any; // A flexible container for any other model-specific data
    };
  }
  