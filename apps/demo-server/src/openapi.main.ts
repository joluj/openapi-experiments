import { createApp } from './app';
import { createOpenApiConfig } from './createOpenApiConfig';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';
import * as path from 'path';

const bootstrap = async () => {
  const app = await createApp();
  const document = createOpenApiConfig(app);

  const targetFolder = path.resolve('./dist/openapi/');
  const targetFile = path.join(targetFolder, 'demo-server.json');

  fs.mkdirSync(targetFolder, { recursive: true });

  fs.writeFileSync(targetFile, JSON.stringify(document, undefined, 2));

  Logger.log(`🛠 OpenApi definition created at ${targetFile}`, 'Main');
};

bootstrap().catch((e) => console.error(e));
