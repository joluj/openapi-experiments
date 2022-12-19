import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {Pet} from "./types/models/Pet";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('example')
  getData(): Pet {
    return this.appService.getCat();
  }
}

