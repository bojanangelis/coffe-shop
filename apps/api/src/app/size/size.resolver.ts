import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SizeService } from './size.service';
import {
  CreateOneSizeArgs,
  DeleteOneSizeArgs,
  FindUniqueSizeArgs,
  Size,
  UpdateOneSizeArgs
} from '@coffee-shop/api/generated-db-types';

@Resolver(() => Size)
export class SizeResolver {
  constructor(private readonly sizeService: SizeService) {}

  @Mutation(() => Size)
  createSize(@Args() createOneSizeArgs: CreateOneSizeArgs) {
    return this.sizeService.create(createOneSizeArgs);
  }

  @Query(() => [Size])
  sizes() {
    return this.sizeService.findAll();
  }

  @Query(() => Size)
  size(@Args() findUniqueSizeArgs: FindUniqueSizeArgs) {
    return this.sizeService.findOne(findUniqueSizeArgs);
  }

  @Mutation(() => Size)
  updateSize(@Args() updateOneSizeArgs: UpdateOneSizeArgs) {
    return this.sizeService.update(updateOneSizeArgs);
  }

  @Mutation(() => Size)
  removeSize(@Args() deleteOneSizeArgs: DeleteOneSizeArgs) {
    return this.sizeService.remove(deleteOneSizeArgs);
  }
}
