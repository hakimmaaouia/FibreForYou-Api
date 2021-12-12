import { NestFactory } from '@nestjs/core';
import console from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('bootstrap');
  var test = 'test';
  var test2 = 'test';

  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
