import { Injectable } from '@nestjs/common';
import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneCategoryArgs,
  DeleteOneCategoryArgs,
  FindUniqueCategoryArgs,
  UpdateOneCategoryArgs
} from '@coffee-shop/api/generated-db-types';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneCategoryArgs: CreateOneCategoryArgs) {
    return this.prisma.category.create({
      data: createOneCategoryArgs.data,
      include: { subCategories: true }
    });
  }

  findAll() {
    return this.prisma.category.findMany({ include: { subCategories: true } });
  }

  findOne(findUniqueCategoryArgs: FindUniqueCategoryArgs) {
    return this.prisma.category.findUnique({
      where: findUniqueCategoryArgs.where,
      include: { subCategories: true }
    });
  }

  update(updateOneCategoryArgs: UpdateOneCategoryArgs) {
    return this.prisma.category.update({
      where: updateOneCategoryArgs.where,
      data: updateOneCategoryArgs.data,
      include: { subCategories: true }
    });
  }

  remove(deleteOneCategoryArgs: DeleteOneCategoryArgs) {
    return this.prisma.category.delete({
      where: deleteOneCategoryArgs.where,
      include: { subCategories: true }
    });
  }
}
