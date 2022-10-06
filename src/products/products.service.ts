import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  addItem(title: string, description: string, price: number) {
    const id = Math.random().toString();
    const newItem = new Product(id, title, description, price);
    this.products.push(newItem);
    return id;
  }

  getAllItems() {
    return [...this.products];
  }

  getOneItem(id: string) {
    return this.findItem(id)[0];
  }

  updateItem(id: string, title: string, description: string, price: number) {
    const [product, index] = this.findItem(id);
    if (title) {
      product.title = title;
    }
    if (description) {
      product.description = description;
    }
    if (price) {
      product.price = price;
    }
    this.products[index] = product;
  }

  deleteItem(id: string) {
    const index = this.findItem(id)[1];
    this.products.splice(index, 1);
  }

  findItem(id: string): [Product, number] {
    const index = this.products.findIndex((product) => product.id === id);
    const product = this.products[index];
    if (!product) {
      throw new NotFoundException("Couldn't find the product!");
    }
    return [product, index];
  }
}
