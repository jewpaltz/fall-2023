import data from "@/data/products.json";

import { api } from "./session"

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export function getProducts(): Promise<Product[]> {
  return api('products');
}