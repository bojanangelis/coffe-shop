import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneHomeBlockArgs,
  DeleteOneHomeBlockArgs,
  FindUniqueHomeBlockArgs,
  UpdateOneHomeBlockArgs
} from '@coffee-shop/api/generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeBlockService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneHomeBlockArgs: CreateOneHomeBlockArgs) {
    return this.prisma.homeBlock.create({
      data: createOneHomeBlockArgs.data,
      include: { rgbBackground: true }
    });
  }

  findAll() {
    return this.prisma.homeBlock.findMany({ include: { rgbBackground: true } });
  }

  findOne(findUniqueHomeBlockArgs: FindUniqueHomeBlockArgs) {
    const { where } = findUniqueHomeBlockArgs;
    return this.prisma.homeBlock.findUnique({ where, include: { rgbBackground: true } });
  }

  update(updateOneHomeBlockArgs: UpdateOneHomeBlockArgs) {
    return this.prisma.homeBlock.update({
      data: updateOneHomeBlockArgs.data,
      where: updateOneHomeBlockArgs.where,
      include: { rgbBackground: true }
    });
  }

  remove(deleteOneHomeBlockArgs: DeleteOneHomeBlockArgs) {
    return this.prisma.homeBlock.delete({
      where: deleteOneHomeBlockArgs.where,
      include: { rgbBackground: true }
    });
  }
}
