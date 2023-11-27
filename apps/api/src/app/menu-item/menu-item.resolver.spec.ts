import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemResolver } from './menu-item.resolver';
import { MenuItemService } from './menu-item.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('MenuItemResolver', () => {
  let resolver: MenuItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, MenuItemService, MenuItemResolver]
    }).compile();

    resolver = module.get<MenuItemResolver>(MenuItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
