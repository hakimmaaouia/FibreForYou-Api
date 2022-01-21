import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { GetProductsWithFilterDto } from './dto/getProductWithFilter.dto';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts(
    @Query() GetProductsWithFilter: GetProductsWithFilterDto,
  ): string {
    if (Object.keys(GetProductsWithFilter).length != 0) {
      return this.productService.getProductsWithFilter(GetProductsWithFilter);
    } else {
      return this.productService.getProducts();
    }
  }

  @Get(':id')
  getproduct(@Param('id') id: number): string {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(createProductDto: CreateProductDto): string {
    return this.productService.createProduct(createProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): string {
    return this.productService.deleteProduct(id);
  }
}
