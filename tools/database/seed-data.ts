import { User } from '../../libs/api/generated-db-types/src';

export const USERS_SEED_DATA: User[] = [
  {
    id: '1423',
    email: 'admin@bojan.com',
    name: 'Administrator Bojan',
    password: '$2b$10$f8T7zND1QU8/aZRKySUXi.SaJykI5j3t9k7isqsAu5JbiqtmB2hTO' //pw -> admin123
  }
];