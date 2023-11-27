import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SubCategoryService } from './sub-category.service';
import {
  CreateOneSubCategoryArgs,
  DeleteOneCategoryArgs,
  FindUniqueSubCategoryArgs,
  SubCategory,
  UpdateOneSubCategoryArgs
} from '@coffee-shop/api/generated-db-types';

@Resolver(() => SubCategory)
export class SubCategoryResolver {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @Mutation(() => SubCategory)
  createSubCategory(@Args() createOneSubCategoryArgs: CreateOneSubCategoryArgs) {
    return this.subCategoryService.create(createOneSubCategoryArgs);
  }

  @Query(() => [SubCategory])
  subCategories() {
    return this.subCategoryService.findAll();
  }

  @Query(() => SubCategory)
  subCategory(@Args() findUniqueSubCategoryArgs: FindUniqueSubCategoryArgs) {
    return this.subCategoryService.findOne(findUniqueSubCategoryArgs);
  }

  @Mutation(() => SubCategory)
  updateSubCategory(@Args() updateOneSubCategoryArgs: UpdateOneSubCategoryArgs) {
    return this.subCategoryService.update(updateOneSubCategoryArgs);
  }

  @Mutation(() => SubCategory)
  removeSubCategory(@Args() deleteOneCategoryArgs: DeleteOneCategoryArgs) {
    return this.subCategoryService.remove(deleteOneCategoryArgs);
  }
}
