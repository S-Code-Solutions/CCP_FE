export interface Product {
    id: string;             // Unique identifier for the product
    title: string;          // Title of the product
    description: string;    // Description of the product
    imageUrl?: string;      // Optional URL for the product's image
    price?: number;         // Optional price of the product
    // Add any other product attributes you expect from your backend
  }
  