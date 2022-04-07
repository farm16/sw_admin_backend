import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import {
  BusinessHoursType,
  BusinessLocationType,
  BusinessType,
  CurrencyType,
} from 'shortwaits-shared';
import { User } from '../../users/entities/user.schema';

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
  staff: [] /** @todo every UsersType in the Shortwaits admin app is a staff */;
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
  @Prop(
    raw({
      name: String,
      code: String,
      symbol: String,
      codeNumber: Number,
      decimalSeparator: Number,
    }),
  )
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
  @Prop(
    raw({
      mon: { type: Array },
      tue: { type: Array },
      wed: { type: Array },
      thu: { type: Array },
      fri: { type: Array },
      sat: { type: Array },
      sun: { type: Array },
    }),
  )
  hours: BusinessHoursType;
  @ApiProperty()
  @Prop(
    raw({
      formattedAddress: { type: String },
      streetAddress: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
      coordinates: { type: [Number, Number] },
    }),
  )
  location: BusinessLocationType;
  @ApiProperty()
  @Prop()
  isRegistrationCompleted: boolean;
  @ApiProperty()
  @Prop()
  deleted: boolean;
  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  createdBy: User;
  @ApiProperty()
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  updatedBy: User;
  /**
   * @todo !!!
   * */
  @ApiProperty()
  @Prop({ type: Object })
  deliveryInfo: Record<string, string>;
  @ApiProperty()
  @Prop()
  reservations: [];
  @ApiProperty()
  @Prop({ type: Object })
  paymentMethods: Record<string, string>;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
