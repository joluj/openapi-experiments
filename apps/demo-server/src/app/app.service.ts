import { Injectable } from '@nestjs/common';
import { CatDto, InsertCatDto } from './Cat.dto';

@Injectable()
export class AppService {
  readonly cats: Record<string, CatDto> = {};

  all() {
    return Object.values(this.cats);
  }

  insert(cat: InsertCatDto) {
    const newCat: CatDto = { ...cat, id: Object.values(this.cats).length };
    this.cats[newCat.id] = newCat;
    return newCat;
  }

  get(id: string) {
    return this.cats[id];
  }

  delete(id: string) {
    delete this.cats[id];
  }
}
