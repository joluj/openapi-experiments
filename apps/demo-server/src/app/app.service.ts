import { Injectable } from '@nestjs/common';
import {Pet} from "./types/models/Pet";

@Injectable()
export class AppService {
  getCat(): Pet {
    return {
      name: "Cat",
      photoUrls: [
        "https://http.cat/200",
        "https://http.cat/"
      ],
    };
  }
}
