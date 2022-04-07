import { ApiProperty } from '@nestjs/swagger';
import { AuthPayloadType } from 'shortwaits-shared';
import { User } from '../users/entities/user.schema';

export class AuthSuccessResponse implements AuthPayloadType {
  @ApiProperty()
  auth: {
    readonly token: string;
    readonly refreshToken?: string;
  };
  @ApiProperty()
  data: User & {
    readonly _id: any;
  };
}
