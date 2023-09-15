import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/creat-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }
}
