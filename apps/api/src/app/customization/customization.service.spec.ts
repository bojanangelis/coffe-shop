import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationService } from './customization.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('CustomizationService', () => {
  let service: CustomizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomizationService, PrismaService]
    }).compile();

    service = module.get<CustomizationService>(CustomizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
