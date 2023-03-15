import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    async postuno(@Body() body:any):Promise<any>{
        console.log(body)
        await this.usersService.postuno(body)
        return {message:`Se ha registrado el usuario ${body.username}`}
    }
}
