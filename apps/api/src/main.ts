/**
 * This is not a production server yet! -> Not yet WIP ON THIS JIRA TICKET! :D
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from '@fastify/helmet';
import { AppModule } from './app/app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { apiEnv } from './environments/environment';
import fastifyCookie from '@fastify/cookie';

const { isProd, api, cookie } = apiEnv;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.register(fastifyCookie, { secret: cookie.cookie_secret });
  app.enableCors();
  await app.register(helmet, { contentSecurityPolicy: isProd });
  await app.listen(api.port);
  Logger.log(`🚀 Application is running on: http://localhost:${api.port}/graphiql`);
}
// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch(console.log);
