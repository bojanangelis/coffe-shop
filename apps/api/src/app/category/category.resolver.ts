import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import {
  Category,
  CreateOneCategoryArgs,
  DeleteOneCategoryArgs,
  FindUniqueCategoryArgs,
  UpdateOneCategoryArgs
} from '@coffee-shop/api/generated-db-types';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args() createOneCategoryArgs: CreateOneCategoryArgs) {
    return this.categoryService.create(createOneCategoryArgs);
  }

  @Query(() => [Category])
  categories() {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  category(@Args() findUniqueCategoryArgs: FindUniqueCategoryArgs) {
    return this.categoryService.findOne(findUniqueCategoryArgs);
  }

  @Mutation(() => Category)
  updateCategory(@Args() updateOneCategoryArgs: UpdateOneCategoryArgs) {
    return this.categoryService.update(updateOneCategoryArgs);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => Int }) deleteOneCategoryArgs: DeleteOneCategoryArgs) {
    return this.categoryService.remove(deleteOneCategoryArgs);
  }
}
