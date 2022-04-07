import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ConfigService } from '@nestjs/config';
import { Service } from './entities/service.entity';

/**
 * docs
 * @url https://mongoosejs.com/docs/queries.html#queries-are-not-promises
 */

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<Service>,
    private config: ConfigService,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    const newService = await this.serviceModel.create(createServiceDto);
    return newService;
  }

  async findAll() {
    const services = await this.serviceModel.find({});
    return services;
  }

  async findOne(id: string) {
    const service = await this.serviceModel.findById(id);
    return service;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const updatedService = await this.serviceModel.findByIdAndUpdate(
      id,
      updateServiceDto,
    );
    return updatedService;
  }

  async remove(id: string) {
    const deletedService = await this.serviceModel.findByIdAndDelete({
      _id: id,
    });
    return deletedService;
  }
}
