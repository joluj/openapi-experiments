import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

export const createApp = async () => {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  return app;
};
