import { UserCreateInput } from '@coffee-shop/api/generated-db-types';
import { InputType, PickType } from '@nestjs/graphql';

@InputType()
export class SignUpInput extends PickType(UserCreateInput, ['email', 'password', 'name']) {}
