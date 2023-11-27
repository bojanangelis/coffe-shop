import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { PrismaService } from '@coffee-shop/api/data-access-db';

@Module({
  providers: [CategoryResolver, CategoryService, PrismaService]
})
export class CategoryModule {}
