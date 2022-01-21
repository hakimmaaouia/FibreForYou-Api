import { IsNotEmpty } from 'class-validator';

export class GetProductsWithFilterDto {
  @IsNotEmpty()
  name: string;
}
