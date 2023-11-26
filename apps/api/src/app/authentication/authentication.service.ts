import { Injectable } from '@nestjs/common';
import { LoginInput } from './dto/login-authentication.input';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@coffee-shop/api/generated-db-types';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ where: { email } });
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  }

  login(user: User) {
    return user;
  }

  async signUp(signUp: LoginInput) {
    const { email, password } = signUp;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return this.userService.create({ data: { email, password: hashedPassword } });
  }
}
