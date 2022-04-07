import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { CategoriesType } from 'shortwaits-shared';

@Schema()
export class Categories extends Document implements CategoriesType {
  @ApiProperty()
  @Prop()
  short_id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  keys: readonly string[];

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  translations: readonly {
    readonly languageCode: string;
    readonly languageName: string;
    readonly translation: string;
  }[];

  @ApiProperty()
  @Prop()
  isDefault: boolean;

  @ApiProperty()
  @Prop()
  state: number;

  @ApiProperty()
  @Prop()
  deleted?: boolean;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
