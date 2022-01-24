import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProductModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
