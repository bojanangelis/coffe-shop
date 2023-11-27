import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomizationService } from './customization.service';
import {
  CreateOneCustomizationArgs,
  Customization,
  DeleteOneCustomizationArgs,
  FindUniqueCustomizationArgs,
  UpdateOneCustomizationArgs
} from '@coffee-shop/api/generated-db-types';

@Resolver(() => Customization)
export class CustomizationResolver {
  constructor(private readonly customizationService: CustomizationService) {}

  @Mutation(() => Customization)
  createCustomization(@Args() createOneCustomizationArgs: CreateOneCustomizationArgs) {
    return this.customizationService.create(createOneCustomizationArgs);
  }

  @Query(() => Customization)
  customization(@Args() findUniqueCustomizationArgs: FindUniqueCustomizationArgs) {
    return this.customizationService.findOne(findUniqueCustomizationArgs);
  }

  @Mutation(() => Customization)
  updateCustomization(@Args() updateOneCustomizationArgs: UpdateOneCustomizationArgs) {
    return this.customizationService.update(updateOneCustomizationArgs);
  }

  @Mutation(() => Customization)
  removeCustomization(@Args() deleteOneCustomizationArgs: DeleteOneCustomizationArgs) {
    return this.customizationService.remove(deleteOneCustomizationArgs);
  }
}
