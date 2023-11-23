import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '@coffee-shop/api/data-access-db';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService]
})
export class UserModule {}
