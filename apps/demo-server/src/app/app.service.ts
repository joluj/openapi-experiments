import { Injectable, Logger } from '@nestjs/common';
import { CatDto, InsertCatDto } from './Cat.dto';
import * as fs from 'fs';

@Injectable()
export class AppService {
  readonly logger = new Logger(AppService.name);

  readonly cats: Record<number, CatDto> = {};

  constructor() {
    try {
      Object.assign(
        this.cats,
        JSON.parse(fs.readFileSync('./dist/cats.json').toString())
      );
    } catch (e) {
      this.logger.error(e);
    }
  }

  all() {
    return Object.values(this.cats);
  }

  insert(cat: InsertCatDto) {
    const newCat: CatDto = { ...cat, id: Object.values(this.cats).length };
    this.cats[newCat.id] = newCat;
    this.saveCats();
    return newCat;
  }

  get(id: number) {
    return this.cats[id];
  }

  delete(id: number) {
    delete this.cats[id];
    this.saveCats();
  }

  private saveCats() {
    fs.writeFileSync(
      './dist/cats.json',
      JSON.stringify(this.cats, undefined, 2)
    );
  }
}
