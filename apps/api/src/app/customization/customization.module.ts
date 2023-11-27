import { Module } from '@nestjs/common';
import { CustomizationService } from './customization.service';
import { CustomizationResolver } from './customization.resolver';
import { PrismaService } from '@coffee-shop/api/data-access-db';

@Module({
  providers: [CustomizationResolver, CustomizationService, PrismaService]
})
export class CustomizationModule {}
