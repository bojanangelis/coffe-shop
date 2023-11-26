import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationResolver } from './authentication.resolver';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '@coffee-shop/api/data-access-db';

describe('AuthenticationResolver', () => {
  let resolver: AuthenticationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, AuthenticationResolver, AuthenticationService, UserService]
    }).compile();

    resolver = module.get<AuthenticationResolver>(AuthenticationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
