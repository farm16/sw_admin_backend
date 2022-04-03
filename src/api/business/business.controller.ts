import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthPayloadType, TokenPayloadType } from 'shortwaits-shared';
import { AuthSuccessResponse } from './business.interface';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/common/decorators/auth.decorator';
import { AtGuard } from 'src/common/guards';

@ApiTags('business')
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Public()
  @Post('services')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'Returns new user record',
    type: AuthSuccessResponse,
  })
  signUpLocal(
    @Body(new ValidationPipe()) dto: SignUpWithEmailDto,
  ): Promise<AuthPayloadType> {
    return this.businessService.signUpLocal(dto);
  }

  //   @Public()
  //   @Put('services')
  //   @HttpCode(HttpStatus.ACCEPTED)
  //   @ApiCreatedResponse({
  //     status: HttpStatus.CREATED,
  //     description: 'Returns new user record',
  //     type: AuthSuccessResponse,
  //   })
  //   updateBusinessServices(
  //     @Body(new ValidationPipe()) dto: SignUpWithEmailDto,
  //   ): Promise<AuthPayloadType> {
  //     return this.businessService.signUpLocal(dto);
  //   }

  //   @Public()
  //   @Post('categories')
  //   @HttpCode(HttpStatus.OK)
  //   @ApiCreatedResponse({
  //     status: HttpStatus.OK,
  //     description: 'Returns existing user record',
  //     type: AuthSuccessResponse,
  //   })
  //   signInLocal(
  //     @Body(new ValidationPipe()) body: SignInWithEmailDto,
  //   ): Promise<AuthPayloadType> {
  //     return this.businessService.signInLocal(body);
  //   }
}
