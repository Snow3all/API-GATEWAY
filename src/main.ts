import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`AUTH_MODULE_URL: ${process.env.AUTH_MODULE_URL}`);
  console.log(`USER_MODULE_URL: ${process.env.USER_MODULE_URL}`);
  console.log(`PRODUCTS_MODULE_URL: ${process.env.PRODUCTS_MODULE_URL}`);
  console.log('ORDER_MODULE_URL: ', ` ${process.env.ORDER_MODULE_URL}`);
}
bootstrap();
