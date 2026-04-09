import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') //Decorator
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Post()
   create() {
    return this.userService.createUser();
   }

   @Get() 
   findAll() {
    return this.userService.findAll();
   }
}
