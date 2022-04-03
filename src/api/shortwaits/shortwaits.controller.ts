import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ShortwaitsAdminDefaultDataPayloadType } from 'shortwaits-shared';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { Shortwaits } from './shortwaits.schema';
import { ShortwaitsService } from './shortwaits.service';

@ApiTags('shortwaits')
@Controller('shortwaits')
@UseInterceptors(TransformInterceptor)
export class ShortwaitsController {
  @Inject(ShortwaitsService)
  private readonly shortwaitsService: ShortwaitsService;

  @Get('admin/mobile')
  @ApiCreatedResponse({
    status: 200,
    description: 'Returns new default data for mobile',
    type: Shortwaits,
  })
  private async getMobileDefaultData(): Promise<
    ShortwaitsAdminDefaultDataPayloadType[] | never
  > {
    return this.shortwaitsService.getMobileDefaultData();
  }
}
