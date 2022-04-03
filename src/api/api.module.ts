import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ShortwaitsModule } from './shortwaits/shortwaits.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AuthModule, ShortwaitsModule],
})
export class ApiModule {}
