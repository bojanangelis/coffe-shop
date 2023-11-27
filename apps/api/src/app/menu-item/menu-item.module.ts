import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemResolver } from './menu-item.resolver';
import { PrismaService } from '@coffee-shop/api/data-access-db';

@Module({
  providers: [MenuItemResolver, MenuItemService, PrismaService]
})
export class MenuItemModule {}
