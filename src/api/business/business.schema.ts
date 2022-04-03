import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import {
  BusinessHoursType,
  BusinessLocationType,
  BusinessType,
  CurrencyType,
} from 'shortwaits-shared';

@Schema()
export class Business extends Document implements BusinessType {
  @ApiProperty()
  @Prop()
  admins: [] /** @todo this might not always be received via the API why should it ? */;
  @ApiProperty()
  @Prop()
  superAdmins: [] /** @todo this might not always be received via the API why should it ? */;
  @ApiProperty()
  @Prop()
  backgroundAdmins: [] /** @todo this might not always be received via the API why should it ? */;
  @ApiProperty()
  @Prop()
  staff: [] /** @todo every UserType in the Shortwaits admin app is a staff */;
  @ApiProperty()
  @Prop()
  categories: [];
  @ApiProperty()
  @Prop()
  services: [];
  @ApiProperty()
  @Prop({ trim: true })
  description: string;
  @ApiProperty()
  @Prop({ trim: true })
  currency: CurrencyType;
  @ApiProperty()
  @Prop({ trim: true })
  country: string;
  @ApiProperty()
  @Prop({ trim: true })
  phone1: string;
  @ApiProperty()
  @Prop({ trim: true })
  shortName: string;
  @ApiProperty()
  @Prop({ trim: true })
  longName: string;
  @ApiProperty()
  @Prop({ trim: true })
  hours: BusinessHoursType;
  @ApiProperty()
  @Prop({ trim: true })
  location: BusinessLocationType;
  @ApiProperty()
  @Prop()
  isRegistrationCompleted: boolean;
  @ApiProperty()
  @Prop()
  deleted: boolean;
  @ApiProperty()
  @Prop()
  createdBy: any;
  @ApiProperty()
  @Prop()
  updatedBy: any;
  /**
   * @todo !!!
   * */
  @ApiProperty()
  @Prop()
  deliveryInfo?: Record<string, string>;
  @ApiProperty()
  @Prop()
  reservations: [];
  @ApiProperty()
  @Prop()
  paymentMethods?: Record<string, string>;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
