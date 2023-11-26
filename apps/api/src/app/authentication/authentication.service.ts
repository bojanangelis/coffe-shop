import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@coffee-shop/api/generated-db-types';
import { SignUpInput } from './dto/create-user-authentication.input';

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

  async signUp(signUp: SignUpInput) {
    const { email, password, name } = signUp;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return this.userService.create({ data: { email, name, password: hashedPassword } });
  }
}
