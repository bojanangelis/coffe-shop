import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneCustomizationArgs,
  DeleteOneCustomizationArgs,
  FindUniqueCustomizationArgs,
  UpdateOneCustomizationArgs
} from '@coffee-shop/api/generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomizationService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneCustomizationArgs: CreateOneCustomizationArgs) {
    return this.prisma.customization.create({
      data: createOneCustomizationArgs.data,
      include: { menuItem: true }
    });
  }

  findOne(findUniqueCustomizationArgs: FindUniqueCustomizationArgs) {
    return this.prisma.customization.findUnique({
      where: findUniqueCustomizationArgs.where,
      include: { menuItem: true }
    });
  }

  update(updateOneCustomizationArgs: UpdateOneCustomizationArgs) {
    return this.prisma.customization.update({
      where: updateOneCustomizationArgs.where,
      data: updateOneCustomizationArgs.data,
      include: { menuItem: true }
    });
  }

  remove(deleteOneCustomizationArgs: DeleteOneCustomizationArgs) {
    return this.prisma.customization.delete({
      where: deleteOneCustomizationArgs.where,
      include: { menuItem: true }
    });
  }
}
