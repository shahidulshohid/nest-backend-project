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
// now i will search console.neon for create account and create database and get the database url and add in .env file
// npx prisma db push // this command is database connect and create tables in database according to schema.prisma file
//npx prisma generate this for generate prisma client and use in our code for database operations