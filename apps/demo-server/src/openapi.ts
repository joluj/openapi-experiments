import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const createOpenApiConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addServer('http://localhost:3333', 'development')
    .addServer('https://cats.app', 'production')
    .build();

  return SwaggerModule.createDocument(app, config);
};
