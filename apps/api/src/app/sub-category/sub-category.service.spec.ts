import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryService } from './sub-category.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('SubCategoryService', () => {
  let service: SubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoryService, PrismaService]
    }).compile();

    service = module.get<SubCategoryService>(SubCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
