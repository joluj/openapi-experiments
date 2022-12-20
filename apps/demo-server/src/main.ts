import { Logger } from '@nestjs/common';

import { SwaggerModule } from '@nestjs/swagger';
import { createApp } from './app';
import { createOpenApiConfig } from './createOpenApiConfig';

async function bootstrap() {
  const app = await createApp();
  const openApiSpec = createOpenApiConfig(app);
  const port = process.env.PORT || 3333;

  SwaggerModule.setup('api', app, openApiSpec, { customSiteTitle: 'Cats API' });
  await app.listen(port);

  Logger.log(`🚀 Application is running`);
}

bootstrap().catch((e) => console.error(e));
