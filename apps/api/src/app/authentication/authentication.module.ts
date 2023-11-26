import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationResolver } from './authentication.resolver';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from '../guards/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { apiEnv } from '../../environments/environment';
import { PassportModule } from '@nestjs/passport';

const { cookie } = apiEnv;

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: cookie.cookie_secret,
      signOptions: { expiresIn: Number(cookie.cookie_expires) }
    })
  ],
  providers: [AuthenticationResolver, AuthenticationService, LocalStrategy]
})
export class AuthenticationModule {}
