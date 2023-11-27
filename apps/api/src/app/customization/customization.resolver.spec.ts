import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationResolver } from './customization.resolver';
import { CustomizationService } from './customization.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('CustomizationResolver', () => {
  let resolver: CustomizationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, CustomizationResolver, CustomizationService]
    }).compile();

    resolver = module.get<CustomizationResolver>(CustomizationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
