import { Injectable } from '@nestjs/common';
import { UserRepository } from './entities/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
}
