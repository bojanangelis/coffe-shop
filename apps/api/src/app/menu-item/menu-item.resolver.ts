import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuItemService } from './menu-item.service';
import {
  CreateOneMenuItemArgs,
  DeleteOneMenuItemArgs,
  FindUniqueMenuItemArgs,
  MenuItem,
  UpdateOneMenuItemArgs
} from '@coffee-shop/api/generated-db-types';

@Resolver(() => MenuItem)
export class MenuItemResolver {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Mutation(() => MenuItem)
  createMenuItem(@Args() createOneMenuItemArgs: CreateOneMenuItemArgs) {
    return this.menuItemService.create(createOneMenuItemArgs);
  }

  @Query(() => [MenuItem])
  items() {
    return this.menuItemService.findAll();
  }

  @Query(() => MenuItem)
  item(@Args() findUniqueMenuItemArgs: FindUniqueMenuItemArgs) {
    return this.menuItemService.findOne(findUniqueMenuItemArgs);
  }

  @Mutation(() => MenuItem)
  updateMenuItem(@Args() updateOneMenuItemArgs: UpdateOneMenuItemArgs) {
    return this.menuItemService.update(updateOneMenuItemArgs);
  }

  @Mutation(() => MenuItem)
  removeMenuItem(@Args('id', { type: () => Int }) deleteOneMenuItemArgs: DeleteOneMenuItemArgs) {
    return this.menuItemService.remove(deleteOneMenuItemArgs);
  }
}
