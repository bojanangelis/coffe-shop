import { PrismaService } from '@coffee-shop/api/data-access-db';
import {
  CreateOneSizeArgs,
  DeleteOneSizeArgs,
  FindUniqueSizeArgs,
  UpdateOneSizeArgs
} from '@coffee-shop/api/generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SizeService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOneSizeArgs: CreateOneSizeArgs) {
    return this.prisma.size.create({ data: createOneSizeArgs.data, include: { menuItem: true } });
  }

  findAll() {
    return this.prisma.size.findMany({ include: { menuItem: true } });
  }

  findOne(findUniqueSizeArgs: FindUniqueSizeArgs) {
    return this.prisma.size.findUnique({
      where: findUniqueSizeArgs.where,
      include: { menuItem: true }
    });
  }

  update(updateOneSizeArgs: UpdateOneSizeArgs) {
    return this.prisma.size.update({
      where: updateOneSizeArgs.where,
      data: updateOneSizeArgs.data,
      include: { menuItem: true }
    });
  }

  remove(deleteOneSizeArgs: DeleteOneSizeArgs) {
    return this.prisma.size.delete({ where: deleteOneSizeArgs.where, include: { menuItem: true } });
  }
}
