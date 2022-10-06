import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    return this.productService.addItem(title, description, price);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllItems();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productService.getOneItem(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    this.productService.updateItem(id, title, description, price);
    return null;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productService.deleteItem(id);
    return null;
  }
}
