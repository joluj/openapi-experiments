import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const createOpenApiConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addServer('http://localhost:3333', 'development')
    .addServer('https://cats.app', 'production')
    .build();

  return SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_, operationKey) => operationKey,
  });
};
