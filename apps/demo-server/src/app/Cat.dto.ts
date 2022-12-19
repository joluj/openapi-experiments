import { Pet } from './types/models/Pet';
import { ApiHideProperty, ApiProperty, OmitType } from '@nestjs/swagger';
import { MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';

const PetStatusEnum = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

/**
 * A cat
 */
export class CatDto implements Pet {
  /**
   * ID of the cat
   *
   * @example 1337
   */
  id: number;

  /**
   * @example "Black cat"
   */
  @MinLength(4)
  name: string;

  photoUrls: Array<string>;

  @ApiProperty({ enum: Object.values(PetStatusEnum) })
  status: keyof typeof PetStatusEnum;

  @Exclude()
  @ApiHideProperty()
  privateProperty: string;
}

export class InsertCatDto extends OmitType(CatDto, ['id']) {}
