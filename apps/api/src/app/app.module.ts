import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe(),
};

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'tools/graphql-schema/schema.gql'),
    }),
    UserModule,
  ],
  providers: [validationProvider],
})
export class AppModule {}
