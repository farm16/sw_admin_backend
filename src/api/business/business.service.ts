import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { BusinessType } from 'shortwaits-shared';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/createBusinessDto';
import { UpdateBusinessDto } from './dto/updateBusinessDto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private businessModel: Model<Business>,
    private config: ConfigService,
  ) {}

  async getBusiness(businessId: string): Promise<Business> {
    const business = await this.businessModel
      .findById({ _id: businessId })
      .exec();
    return business;
  }

  async updateBusiness(
    businessId: string,
    dto: UpdateBusinessDto,
  ): Promise<Business> {
    const newBusiness = await this.businessModel.findByIdAndUpdate(
      businessId,
      dto,
    );
    return newBusiness;
  }

  async createBusiness(dto: CreateBusinessDto): Promise<Business> {
    const newBusiness = await (await this.businessModel.create(dto)).save();
    return newBusiness;
  }

  async findByKey(
    businessId: string,
    key: keyof BusinessType,
  ): Promise<Business> {
    const data = await this.businessModel
      .findById(businessId, String(key))
      .exec();
    console.log('findByKey>>>', businessId, key, data);
    return data;
  }
}
