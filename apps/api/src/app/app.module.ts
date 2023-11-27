import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'node:path';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { HomeBlockModule } from './home-block/home-block.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CategoryModule } from './category/category.module';
import { MenuItemModule } from './menu-item/menu-item.module';

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe()
};

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'tools/graphql-schema/schema.gql')
    }),
    UserModule,
    HomeBlockModule,
    AuthenticationModule,
    CategoryModule,
    MenuItemModule
  ],
  providers: [validationProvider]
})
export class AppModule {}
