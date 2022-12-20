import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { CatDto, InsertCatDto } from './Cat.dto';

@ApiTags('cats')
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Returns all cats
   */
  @Get()
  getAllCats(): CatDto[] {
    return this.appService.all();
  }

  /**
   * Insert a cat
   */
  @Post()
  insertCat(@Body() cat: InsertCatDto): CatDto {
    return this.appService.insert(cat);
  }

  /**
   * Returns a single cat
   */
  @Get(':id')
  @ApiNotFoundResponse({ description: 'If cat not found' })
  getCat(@Param('id') id: number): CatDto {
    const cat = this.appService.get(+id);
    if (cat) return cat;

    throw new NotFoundException('Cat not found');
  }

  /**
   * Deletes a cat
   * @param id
   */
  @Delete(':id')
  deleteCat(@Param('id') id: number) {
    return this.appService.delete(+id);
  }
}
