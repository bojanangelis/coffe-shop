import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryResolver } from './sub-category.resolver';
import { SubCategoryService } from './sub-category.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('SubCategoryResolver', () => {
  let resolver: SubCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, SubCategoryResolver, SubCategoryService]
    }).compile();

    resolver = module.get<SubCategoryResolver>(SubCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
