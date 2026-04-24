import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
>>>>>>> c9cf6c9840589dfc08a22448052b99514395bb5f
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
