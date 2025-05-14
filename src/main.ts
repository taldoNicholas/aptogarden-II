import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cookieParser());

  app.use(
    session({
      secret: 'meuSegredoaqui',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
      },
      store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/aptogarden'
      })
    })
  )

  
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();
