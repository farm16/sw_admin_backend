import { ApiProperty } from '@nestjs/swagger';
import { Trim } from 'class-sanitizer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInWithEmailDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  @ApiProperty()
  readonly username: string;

  @Trim()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  readonly password: string;
}
