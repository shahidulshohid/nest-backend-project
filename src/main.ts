import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();



// npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express 
// npm i prisma --save-dev
// npm i @prisma/client
//npx prisma init // after install this create .env file and add DATABASE_URL="your database url" in .env file
// for ORM will use prisma ORM and for database will use NEON DB 