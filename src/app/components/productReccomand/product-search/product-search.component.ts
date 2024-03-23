import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../../services/product.service'; // Adjust path as needed

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = []; // Define a more specific type based on your data structure

  constructor() {}

  ngOnInit(): void {
    // Initialize component state as needed
  }

  onSearch(): void {
    if (!this.searchQuery) {
      window.alert("Please enter a search query.");
      return;
    }

    // this.productService.searchProducts(this.searchQuery).subscribe({
    //   next: (results) => {
    //     this.searchResults = results;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching search results:', error);
    //     window.alert('An error occurred while fetching search results. Please try again.');
    //   }
    // });
  }
}
