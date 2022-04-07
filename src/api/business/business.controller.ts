import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { BusinessSuccessResponse } from './business.interface';
import { AtGuard } from 'src/common/guards';
import { CreateBusinessDto } from './dto/createBusinessDto';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { UpdateBusinessDto } from './dto/updateBusinessDto';

@UseGuards(AtGuard)
@ApiTags('business')
@ApiBearerAuth('bearer')
@Controller('business')
@UseInterceptors(TransformInterceptor)
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get(':business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns business record',
    type: BusinessSuccessResponse,
  })
  getBusiness(@Param('business_id') businessId: string) {
    console.log('businessId >>>', businessId);
    return this.businessService.getBusiness(businessId);
  }

  @Patch(':business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Updates business record',
    type: BusinessSuccessResponse,
  })
  patchBusiness(
    @Param('business_id') businessId: string,
    @Body(new ValidationPipe()) dto: UpdateBusinessDto,
  ) {
    return this.businessService.updateBusiness(businessId, dto);
  }

  @Put(':business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Updates business record',
    type: BusinessSuccessResponse,
  })
  putBusiness(
    @Param('business_id') businessId: string,
    @Body(new ValidationPipe()) dto: UpdateBusinessDto,
  ) {
    return this.businessService.updateBusiness(businessId, dto);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Create business record',
    type: BusinessSuccessResponse,
  })
  postBusiness(@Body(new ValidationPipe()) dto: CreateBusinessDto) {
    return this.businessService.createBusiness(dto);
  }

  @Delete(':business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Deletes business record',
    type: BusinessSuccessResponse,
  })
  deleteBusiness(@Param('business_id') businessId: string) {
    return this.businessService.getBusiness(businessId);
  }

  @Get('services/:business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns business services',
    type: BusinessSuccessResponse,
  })
  getBusinessServices(@Param('business_id') businessId: string) {
    return this.businessService.findByKey(businessId, 'services');
  }

  @Get('categories/:business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns business categories',
    type: BusinessSuccessResponse,
  })
  getBusinessCategories(@Param('business_id') businessId: string) {
    return this.businessService.findByKey(businessId, 'categories');
  }

  @Get('staff/:business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns business staff',
    type: BusinessSuccessResponse,
  })
  getBusinessStaff(@Param('business_id') businessId: string) {
    return this.businessService.findByKey(businessId, 'staff');
  }

  @Get('hours/:business_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns business hours',
    type: BusinessSuccessResponse,
  })
  getBusinessHours(@Param('business_id') businessId: string) {
    return this.businessService.findByKey(businessId, 'hours');
  }
}
