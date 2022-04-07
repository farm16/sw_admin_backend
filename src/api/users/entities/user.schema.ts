import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { UserType } from 'shortwaits-shared';

@Schema()
export class User extends Document implements UserType {
  @ApiProperty()
  @Prop({ trim: true })
  username: string;

  @ApiProperty()
  @Prop({ trim: true })
  firstName: string;

  @ApiProperty()
  @Prop({ trim: true })
  lastName: string;

  @ApiProperty()
  @Prop({ unique: true, trim: true, required: true })
  email: string;

  @ApiProperty()
  @Prop()
  lastSignInAt: string;

  @ApiProperty()
  @Prop()
  createdAt: string;

  @ApiProperty()
  @Prop()
  updatedAt: string;

  @ApiProperty()
  @Prop(
    raw({
      screenName: { type: String },
      state: { type: Number, trim: true, default: 0 },
      isCompleted: { type: Boolean, default: false },
    }),
  )
  registrationState: UserType['registrationState'];

  @ApiProperty()
  @Prop({ required: true })
  password: string;

  @ApiProperty()
  @Prop({ default: true })
  state: boolean;

  @ApiProperty()
  @Prop()
  desiredCurrencies: [string];

  @ApiProperty()
  @Prop()
  locales: [
    {
      countryCode: string;
      isRTL: boolean;
      languageCode: string;
      languageTag: string;
    },
  ];

  @ApiProperty()
  @Prop({ ref: 'business' })
  businessId: Types.ObjectId;

  @ApiProperty()
  @Prop()
  rolId: Types.ObjectId;

  @ApiProperty()
  @Prop({ default: false })
  deleted: boolean;

  @ApiProperty()
  @Prop({ default: false })
  isAdmin: boolean;

  @ApiProperty()
  @Prop({ default: false })
  isSuperAdmin: boolean;

  @ApiProperty()
  @Prop({ default: false })
  isBackground: boolean;

  @ApiProperty()
  @Prop({ default: null })
  hashedRt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
