import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  Res,
  NotFoundException,
  HttpStatus,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { JwtAuthGuard } from 'src/api/auth/auth.guard';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@ApiTags('user')
@Controller('user')
@UseGuards(JwtAuthGuard)
@UseInterceptors(TransformInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public async get(@Res() res, @Body('id') userId: string) {
    if (!userId) {
      throw new NotFoundException('User ID does not exist');
    }
    const user = await this.userService.findById(userId);
    return res.status(HttpStatus.OK).json(user);
  }

  @Put(':id')
  public async update(
    @Res() res,
    @Body('id') userId: string,
    @Body('user') userData: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.update(userId, userData);
    return res.status(HttpStatus.OK).json(updatedUser);
  }

  @Post()
  public async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete(':id')
  async delete(@Res() res, @Param() params) {
    await this.userService.remove(params.slug);
    return res.status(HttpStatus.OK);
  }
}
