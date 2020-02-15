/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import * as session from 'express-session';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as cookieSession from 'cookie-session';
import { csrf } from './app/csrf.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });
  app.use(cookieParser());
  app.use(csurf({
    cookie: true
  }));
  app.use(csrf);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
