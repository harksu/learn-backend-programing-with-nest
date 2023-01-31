import { IsString, MinLength, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class createPostDto {
  @Transform((params) => params.value.trim())
  @IsString()
  readonly id: string;

  @Transform((params) => params.value.trim())
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  readonly title: string;

  @IsString()
  @MinLength(2)
  @MaxLength(500)
  readonly content: string;
}
