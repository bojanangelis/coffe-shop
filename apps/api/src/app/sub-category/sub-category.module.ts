import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryResolver } from './sub-category.resolver';
import { PrismaService } from '@coffee-shop/api/data-access-db';

@Module({
  providers: [SubCategoryResolver, SubCategoryService, PrismaService]
})
export class SubCategoryModule {}
