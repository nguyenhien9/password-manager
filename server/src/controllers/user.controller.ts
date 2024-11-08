import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userServie: UserService) {}

  @Get('')
  async getAll(): Promise<User[]> {
    return this.userServie.get();
  }
}
