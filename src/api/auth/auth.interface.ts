import { ApiProperty } from '@nestjs/swagger';
import { AuthPayloadType } from 'shortwaits-shared';
import { User } from '../user/user.schema';

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
