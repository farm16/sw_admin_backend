import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import {
  BusinessHoursType,
  CategoriesPayloadType,
  CurrencyType,
  ServiceColorsType,
  ServicesType,
  ShortwaitsAdminDefaultDataType,
} from 'shortwaits-shared';

@Schema()
export class Shortwaits
  extends Document
  implements ShortwaitsAdminDefaultDataType
{
  @ApiProperty()
  @Prop()
  readonly short_id: string;
  @ApiProperty()
  @Prop()
  readonly name: string;
  @ApiProperty()
  @Prop()
  readonly description: string;
  @ApiProperty()
  @Prop()
  readonly links: string[];
  @ApiProperty()
  @Prop()
  readonly suggestedLang: string;
  @ApiProperty()
  @Prop()
  readonly blackList: readonly any[];
  @ApiProperty()
  @Prop()
  readonly timeZones: readonly string[];
  @ApiProperty()
  @Prop(
    raw({
      Categories: { type: Array },
      myBusinessDefaultServices: { type: Array },
      myBusinessDefaultCurrencies: { type: Array },
      myBusinessDefaultHours: { type: Object },
    }),
  )
  readonly myBusinessDefaultData: {
    readonly Categories: readonly CategoriesPayloadType[];
    readonly myBusinessDefaultServices: readonly ServicesType[];
    readonly myBusinessDefaultCurrencies: readonly CurrencyType[];
    readonly myBusinessDefaultHours: BusinessHoursType;
  };
  @ApiProperty()
  @Prop({ type: Object })
  readonly serviceColors: ServiceColorsType;
}

export const ShortwaitsSchema = SchemaFactory.createForClass(Shortwaits);
