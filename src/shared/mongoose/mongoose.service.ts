import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseModuleOptions {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.config.get('MONGO_DB_URL'),
      useNewUrlParser: true,
      connectionName: this.config.get<string>('MONGO_DB_DATABASE'),
    };
  }
}
