import {Review} from './review';

export class ProductInfo {
  _id: string;
  rating: number;
  name: string;
  price: number;
  countInStock: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  createdAt: string;
  updatedAt: string;
  reviews: Array<Review>;


  constructor() {
  }
}
