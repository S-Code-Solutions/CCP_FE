export interface Product {
  id: string; // Unique identifier for the product
  title: string; // Title of the product
  description: string; // Description of the product
  imageUrl?: string; // Optional URL for the product's image
  // price?: number; // Optional price of the product
  // Add any other product attributes you expect from your backend
}

export class Product {
  // id: number; // Unique identifier for the product
  title: string; // Name or title of the product
  category: string; // Category the product belongs to
  price: number; // Retail price of the product
  imageUrl?: string; // Optional image URL for product visualization

  constructor(
    id: number,
    title: string,
    category: string,
    price: number,
    imageUrl?: string
  ) {
    // this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
