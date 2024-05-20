import { NestFactory } from '@nestjs/core';
import { BigQueryModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(BigQueryModule);
  // await app.listen(3000);
    await app.listen(3000, '192.168.75.132');

}
bootstrap();




// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
//   // await app.listen(3000, '192.168.75.132');
// }
// bootstrap();