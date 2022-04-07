import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AtGuard } from 'src/common/guards';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { Public } from 'src/common/decorators/auth.decorator';

/**
 * @todo this can be cache !!!
 */
@ApiTags('categories')
@Controller('categories')
@ApiBearerAuth('bearer')
@UseInterceptors(TransformInterceptor)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns all categories record',
    // type: CategoriesSuccessResponse,
  })
  getAllCategories() {
    console.warn('hello');
    return this.categoriesService.getAllCategories();
  }

  @Get(':category_id')
  @HttpCode(HttpStatus.OK)
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Returns category record',
    // type: CategoriesSuccessResponse,
  })
  getCategory(@Param('category_id') categoriesId: string) {
    console.warn('hello');
    return this.categoriesService.getCategory(categoriesId);
  }
}
