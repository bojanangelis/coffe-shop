import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeResolver } from './size.resolver';
import { PrismaService } from '@coffee-shop/api/data-access-db';

@Module({
  providers: [SizeResolver, SizeService, PrismaService]
})
export class SizeModule {}
