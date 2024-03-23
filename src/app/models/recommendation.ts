import { Product } from './product';

export class Recommendation {
  type: string; // Type of recommendation (e.g., "user-based", "item-based", "rule-based")
  products: Product[]; // Array of recommended products
  confidence?: number; // Optional confidence level of the recommendation

  constructor(type: string, products: Product[], confidence?: number) {
    this.type = type;
    this.products = products;
    this.confidence = confidence;
  }
}
