import { Controller, Post, UseGuards,Request, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthguard } from './Local-auth.guards';
import {UsersService} from 'src/users/users.service'
import { JwtAuthguard } from './jwt-auth.guards';

@Controller('auth')
export class AuthController {
    usersService: any;
    constructor(
    private readonly authService:AuthService,){}
    @UseGuards(LocalAuthguard)
    @Post('login')
    login(@Request() req){
        return this.authService.login(req.user);
    }
    @UseGuards(JwtAuthguard)
    @Get('profile')
    getprofile(@Request() req){
        return req.user
    }
    @UseGuards(AuthGuard('jwt'))
  @Get(':username')
  async getUserData(@Param('username')username:string, @Request() req) {
    return await this.usersService.findOne(username);
  }
}
