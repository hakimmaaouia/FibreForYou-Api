import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { GetProductsWithFilterDto } from './dto/getProductWithFilter.dto';
import { Product } from './task.model';
@Injectable()
export class ProductService {
  getProducts(): string {
    throw new NotFoundException('test exception');
    return 'This action returns all products';
  }

  getProductsWithFilter(
    GetProductsWithFilter: GetProductsWithFilterDto,
  ): string {
    const { name } = GetProductsWithFilter;
    return `This action returns all products with filter ${name}`;
  }

  getProduct(id: number): string {
    return `This action returns a #${id} product`;
  }

  createProduct(createProductDto: CreateProductDto): string {
    const { name } = createProductDto;
    return `create a new product: ${name} `;
  }

  updateProduct(id: number, product: Product): string {
    return `update a #$ {id} product: ${product}`;
  }

  deleteProduct(id: number): string {
    return `delete a #${id} product`;
  }
}
