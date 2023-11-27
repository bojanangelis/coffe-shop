import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneSubCategoryArgs,
  DeleteOneCategoryArgs,
  FindUniqueSubCategoryArgs,
  UpdateOneCategoryArgs
} from '@coffee-shop/api/generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubCategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneSubCategoryArgs: CreateOneSubCategoryArgs) {
    return this.prisma.subCategory.create({
      data: createOneSubCategoryArgs.data,
      include: {
        category: true,
        menuItems: true
      }
    });
  }

  findAll() {
    return this.prisma.subCategory.findMany({
      include: {
        category: true,
        menuItems: true
      }
    });
  }

  findOne(findUniqueSubCategoryArgs: FindUniqueSubCategoryArgs) {
    return this.prisma.subCategory.findUnique({
      where: findUniqueSubCategoryArgs.where,
      include: {
        category: true,
        menuItems: true
      }
    });
  }

  update(updateOneCategoryArgs: UpdateOneCategoryArgs) {
    return this.prisma.subCategory.update({
      where: updateOneCategoryArgs.where,
      data: updateOneCategoryArgs.data,
      include: {
        category: true,
        menuItems: true
      }
    });
  }

  remove(deleteOneCategoryArgs: DeleteOneCategoryArgs) {
    return this.prisma.subCategory.delete({
      where: deleteOneCategoryArgs.where,
      include: { category: true, menuItems: true }
    });
  }
}
