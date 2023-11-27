import { Injectable } from '@nestjs/common';
import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneMenuItemArgs,
  DeleteOneMenuItemArgs,
  FindUniqueMenuItemArgs,
  UpdateOneMenuItemArgs
} from '@coffee-shop/api/generated-db-types';

@Injectable()
export class MenuItemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneMenuItemArgs: CreateOneMenuItemArgs) {
    return this.prisma.menuItem.create({
      data: createOneMenuItemArgs.data,
      include: {
        subCategory: true,
        customizations: true,
        sizes: true
      }
    });
  }

  findAll() {
    return this.prisma.menuItem.findMany({
      include: {
        subCategory: true,
        customizations: true,
        sizes: true
      }
    });
  }

  findOne(findUniqueMenuItemArgs: FindUniqueMenuItemArgs) {
    return this.prisma.menuItem.findUnique({
      where: findUniqueMenuItemArgs.where,
      include: {
        subCategory: true,
        customizations: true,
        sizes: true
      }
    });
  }

  update(updateOneMenuItemArgs: UpdateOneMenuItemArgs) {
    return this.prisma.menuItem.update({
      where: updateOneMenuItemArgs.where,
      data: updateOneMenuItemArgs.data,
      include: {
        subCategory: true,
        customizations: true,
        sizes: true
      }
    });
  }

  remove(deleteOneMenuItemArgs: DeleteOneMenuItemArgs) {
    return this.prisma.menuItem.delete({
      where: deleteOneMenuItemArgs.where,
      include: {
        subCategory: true,
        customizations: true,
        sizes: true
      }
    });
  }
}
