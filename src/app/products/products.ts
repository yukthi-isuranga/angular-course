import { NgFor, NgStyle, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      id: 'pc-1',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with adjustable DPI.',
      price: 5999,
      imageUrl: 'https://picsum.photos/id/1080/400/400',
      rating: 4.4,
      reviewCount: 78,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: 'pc-2',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with blue switches.',
      price: 15999,
      imageUrl: 'https://picsum.photos/id/1062/400/400',
      rating: 4.6,
      reviewCount: 142,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: 'pc-3',
      name: 'Gaming Headset',
      description: 'Surround sound gaming headset with noise-cancel mic.',
      price: 12999,
      imageUrl: 'https://picsum.photos/id/180/400/400',
      rating: 4.3,
      reviewCount: 96,
      inStock: false,
      category: 'Audio',
    },
    {
      id: 'pc-4',
      name: 'External SSD',
      description: '1TB portable external SSD.',
      price: 34999,
      imageUrl: 'https://picsum.photos/id/64/400/400',
      rating: 4.7,
      reviewCount: 105,
      inStock: true,
      category: 'Computers',
    },
    {
      id: 'pc-5',
      name: '4K Monitor',
      description: '27-inch 4K UHD monitor with HDR support.',
      price: 89999,
      imageUrl: 'https://picsum.photos/id/1015/400/400',
      rating: 4.8,
      reviewCount: 67,
      inStock: true,
      category: 'Displays',
    },
  ];
}
