/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';

import { SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { createApp } from './app';
import { createOpenApiConfig } from './openapi';

async function bootstrap() {
  const app = await createApp();
  const openApiSpec = createOpenApiConfig(app);
  const port = process.env.PORT || 3333;

  if (process.env.NODE_ENV === 'development') {
    fs.writeFileSync(
      './dist/open-api/demo-server/backend.json',
      JSON.stringify(openApiSpec, undefined, 2)
    );
  }

  SwaggerModule.setup('api', app, openApiSpec, { customSiteTitle: 'Cats API' });
  await app.listen(port);

  Logger.log(`🚀 Application is running`);
}

bootstrap().catch((e) => console.error(e));
